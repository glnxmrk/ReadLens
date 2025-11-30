import React, { useState, useEffect } from 'react';
import { Auth } from './components/Auth';
import { Enrollment } from './components/Task0_Enrollment';
import { GridAssessment } from './components/GridAssessment';
import { Task1_Sentences } from './components/Task1_Sentences';
import { Learner, User } from './types';
import { INITIAL_ASSESSMENT_DATA } from './constants';
import { Book, Menu, LogOut, CheckCircle } from 'lucide-react';

const TASKS = [
    { id: '0', title: 'Enrollment' },
    { id: '1', title: 'Task 1' },
    { id: '2', title: 'Task 2' },
    { id: '3', title: 'Task 3' },
    { id: '4', title: 'Task 4' },
    { id: '5', title: 'Results' },
    { id: '6', title: 'Reports' }
];

export default function App() {
    const [user, setUser] = useState<User | null>(null);
    const [learners, setLearners] = useState<Learner[]>([]);
    const [currentLearnerId, setCurrentLearnerId] = useState<string | null>(null);
    const [currentTask, setCurrentTask] = useState('0');
    const [taskData, setTaskData] = useState<any>(null);
    
    // State to hold custom Task 1 passages (Grade > Lang > Array of Passage Arrays)
    const [customTask1Data, setCustomTask1Data] = useState<any>(null);

    // Persisted State
    useEffect(() => {
        const storedLearners = localStorage.getItem('crlaLearners');
        if (storedLearners) setLearners(JSON.parse(storedLearners));

        // Initialize Custom Task 1 Data
        const storedTask1 = localStorage.getItem('crlaTask1Data');
        if (storedTask1) {
            setCustomTask1Data(JSON.parse(storedTask1));
        } else {
            // Transform INITIAL constants into editable structure
            const initData: any = { "2": {}, "3": {} };
            
            // Grade 2
            if (INITIAL_ASSESSMENT_DATA["2"]) {
                if (INITIAL_ASSESSMENT_DATA["2"].filipino) initData["2"].filipino = [INITIAL_ASSESSMENT_DATA["2"].filipino.task1.items];
                if (INITIAL_ASSESSMENT_DATA["2"].bisaya) initData["2"].bisaya = [INITIAL_ASSESSMENT_DATA["2"].bisaya.task1.items];
            }
            
            // Grade 3
            if (INITIAL_ASSESSMENT_DATA["3"]) {
                if (INITIAL_ASSESSMENT_DATA["3"].filipino) initData["3"].filipino = [INITIAL_ASSESSMENT_DATA["3"].filipino.task1.items];
                if (INITIAL_ASSESSMENT_DATA["3"].bisaya) initData["3"].bisaya = [INITIAL_ASSESSMENT_DATA["3"].bisaya.task1.items];
                if (INITIAL_ASSESSMENT_DATA["3"].english) initData["3"].english = [INITIAL_ASSESSMENT_DATA["3"].english.task1.items];
            }
            setCustomTask1Data(initData);
        }
    }, []);

    useEffect(() => {
        if (learners.length > 0) localStorage.setItem('crlaLearners', JSON.stringify(learners));
    }, [learners]);

    useEffect(() => {
        if (currentLearnerId) {
            const learner = learners.find(l => l.id === currentLearnerId);
            if (learner) {
                // Load data based on grade/language from constants for default fallback
                const gradeData = INITIAL_ASSESSMENT_DATA[learner.grade.toString()];
                const langData = gradeData ? (gradeData[learner.language] || gradeData['default'] || gradeData['filipino']) : null;
                setTaskData(langData);
            }
        }
    }, [currentLearnerId, learners]);

    // Save Custom Task 1 Data Helper
    const saveTask1Data = (newData: any) => {
        setCustomTask1Data(newData);
        localStorage.setItem('crlaTask1Data', JSON.stringify(newData));
    };

    // Assessment State Holders
    const [scores, setScores] = useState({
        task1: 0,
        task2: 0,
        task3: 0,
        missed1: [] as string[],
        missed3: [] as string[]
    });

    const currentLearner = learners.find(l => l.id === currentLearnerId);
    
    const btnPrimaryClass = "bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-4 rounded-lg shadow hover:shadow-lg transition-all";

    const renderTaskContent = () => {
        if (currentTask === '0') {
            return (
                <Enrollment 
                    learners={learners}
                    currentLearnerId={currentLearnerId}
                    onAddLearner={(l) => setLearners([...learners, l])}
                    onUpdateLearner={(l) => setLearners(learners.map(existing => existing.id === l.id ? l : existing))}
                    onDeleteLearner={(id) => {
                        setLearners(learners.filter(l => l.id !== id));
                        if (currentLearnerId === id) setCurrentLearnerId(null);
                    }}
                    onSelectLearner={setCurrentLearnerId}
                    onNext={() => setCurrentTask('1')}
                />
            );
        }

        if (!currentLearner) return <div className="p-8 text-center text-gray-500">Please select a learner in Task 0 first.</div>;

        if (currentTask === '1') {
            // Logic: Grade 1 uses Grid (Letters). Grade 2/3 uses Custom Sentences.
            
            if (currentLearner.grade === 1) {
                if (!taskData) return <div>Loading defaults...</div>;
                return (
                    <GridAssessment 
                        title={`Task 1: ${taskData.task1.title}`}
                        items={taskData.task1.items}
                        onUpdateItems={(items) => {/* Handle edits locally if needed */}}
                        onComplete={(score, missed) => {
                            setScores(prev => ({ ...prev, task1: score, missed1: missed }));
                            setCurrentTask(score <= 6 ? '3' : '2'); // Remedial logic
                        }}
                    />
                );
            } else {
                 // Grade 2/3 Task 1: Sentences (Customizable & Persisted)
                 if (!customTask1Data) return <div className="p-8 text-center text-gray-500">Loading custom data...</div>;

                 const g = currentLearner.grade.toString();
                 // Normalize language key to match storage keys
                 let l = currentLearner.language.toLowerCase();
                 if (l === 'sinugbuanong bisaya' || l === 'bisaya') l = 'bisaya';
                 if (l !== 'english' && l !== 'bisaya') l = 'filipino'; // Default fallback

                 const gradeData = customTask1Data[g] || {};
                 const langPassages = gradeData[l] || []; 
                 
                 // Determine which passage to show based on previous assessment count
                 const assessIdx = currentLearner.assessments ? currentLearner.assessments.length : 0;
                 const currentPassage = langPassages[assessIdx] || [];

                 return (
                     <Task1_Sentences 
                        currentPassage={currentPassage}
                        allPassages={langPassages}
                        assessmentIndex={assessIdx}
                        onSave={(newPassages) => {
                             const newData = { ...customTask1Data };
                             if(!newData[g]) newData[g] = {};
                             newData[g][l] = newPassages;
                             saveTask1Data(newData);
                        }}
                        onNext={() => setCurrentTask('2')}
                     />
                 )
            }
        }

        if (currentTask === '3') {
             if (!taskData) return <div>Loading defaults...</div>;
             if (currentLearner.grade > 1) {
                 // G2/G3 Task 3: Word ID in Grid (Editable Box)
                 return (
                    <GridAssessment 
                        title={`Task 3: ${taskData.task3.title}`}
                        items={taskData.task3.items} 
                        onUpdateItems={(items) => { /* update local state if needed */ }}
                        onComplete={(score, missed) => {
                            setScores(prev => ({ ...prev, task3: score, missed3: missed }));
                            setCurrentTask('4');
                        }}
                        gridCols={3} 
                    />
                 );
             } else {
                 // G1 Task 3: Rhyming (Pairs)
                  return (
                    <GridAssessment 
                        title={`Task 3: ${taskData.task3.title}`}
                        items={taskData.task3.items.map((i: any) => i.pair)} 
                        onUpdateItems={() => {}}
                        onComplete={(score, missed) => {
                            setScores(prev => ({ ...prev, task3: score, missed3: missed }));
                            setCurrentTask('4');
                        }}
                        gridCols={2}
                    />
                 );
             }
        }

        return (
            <div className="bg-white p-10 rounded-xl shadow text-center">
                <h2 className="text-2xl font-bold text-gray-400">Task {currentTask} Placeholder</h2>
                <p className="mb-4">Implementation of Task {currentTask} logic (Story/Results) would go here following the same patterns.</p>
                <button onClick={() => setCurrentTask((parseInt(currentTask)+1).toString())} className={btnPrimaryClass}>Next</button>
            </div>
        );
    };

    if (!user) return <Auth onLogin={setUser} />;

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-gradient-to-r from-primary to-secondary text-white p-4 shadow-lg sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-white text-primary p-2 rounded-lg"><Book /></div>
                        <div>
                            <h1 className="text-xl font-bold leading-none">ReadLens</h1>
                            <p className="text-xs opacity-80">CRLA Assessment Tool</p>
                        </div>
                    </div>
                    <div className="text-right text-sm hidden md:block">
                        <div className="font-bold">{user.school}</div>
                        <div>{user.name}</div>
                    </div>
                    <button onClick={() => setUser(null)} className="md:hidden"><LogOut size={20}/></button>
                </div>
            </header>

            <main className="flex-1 container mx-auto p-4 flex flex-col md:flex-row gap-6">
                {/* Sidebar Navigation */}
                <nav className="md:w-64 flex-shrink-0 space-y-4">
                    <div className="bg-white rounded-xl shadow p-4">
                        <h3 className="font-bold text-gray-500 mb-2 uppercase text-xs">Current Learner</h3>
                        {currentLearner ? (
                            <div>
                                <div className="font-bold text-lg text-primary">{currentLearner.name}</div>
                                <div className="text-sm text-gray-600">Grade {currentLearner.grade} • {currentLearner.language}</div>
                            </div>
                        ) : (
                            <div className="text-gray-400 italic text-sm">No learner selected</div>
                        )}
                    </div>

                    <div className="bg-white rounded-xl shadow overflow-hidden">
                        {TASKS.map(task => (
                            <button
                                key={task.id}
                                onClick={() => setCurrentTask(task.id)}
                                disabled={task.id !== '0' && !currentLearner}
                                className={`w-full text-left p-4 border-b last:border-0 transition-colors flex items-center justify-between ${
                                    currentTask === task.id 
                                    ? 'bg-blue-50 text-primary font-bold border-l-4 border-l-primary' 
                                    : 'hover:bg-gray-50 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed'
                                }`}
                            >
                                <span>{task.title}</span>
                                {currentTask === task.id && <CheckCircle size={16} />}
                            </button>
                        ))}
                    </div>
                </nav>

                {/* Main Content Area */}
                <div className="flex-1">
                    {renderTaskContent()}
                </div>
            </main>
        </div>
    );
}