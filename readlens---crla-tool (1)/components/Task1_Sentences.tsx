import React, { useState } from 'react';
import { Edit2, Plus, Trash2, Save, X, ChevronRight } from 'lucide-react';

interface Props {
    currentPassage: string[]; // The sentences for the current assessment
    allPassages: string[][]; // All sets for this grade/lang
    assessmentIndex: number; // Which assessment number (0-based)
    onSave: (newPassages: string[][]) => void;
    onNext: () => void;
}

export const Task1_Sentences: React.FC<Props> = ({ currentPassage, allPassages, assessmentIndex, onSave, onNext }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState<string[][]>([]);

    const handleStartEdit = () => {
        // Deep copy
        setEditData(allPassages.map(p => [...p]));
        setIsEditing(true);
    };

    const handleSave = () => {
        onSave(editData);
        setIsEditing(false);
    };

    const updatePassage = (idx: number, text: string) => {
        const newData = [...editData];
        newData[idx] = text.split('\n').filter(s => s.trim() !== '');
        setEditData(newData);
    };

    const addPassage = () => {
        setEditData([...editData, ["New sentence 1", "New sentence 2"]]);
    };

    const deletePassage = (idx: number) => {
        if (confirm('Delete this passage set? This action cannot be undone.')) {
            const newData = editData.filter((_, i) => i !== idx);
            setEditData(newData);
        }
    };

    if (isEditing) {
        return (
            <div className="bg-white p-6 rounded-xl shadow space-y-6">
                <div className="flex justify-between items-center border-b pb-4">
                    <div>
                        <h2 className="text-xl font-bold text-secondary">Manage Passages</h2>
                        <p className="text-sm text-gray-500">Edit existing passages or add new ones for future assessments.</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => setIsEditing(false)} className="p-2 text-gray-500 hover:bg-gray-100 rounded flex items-center gap-1">
                            <X size={18} /> Cancel
                        </button>
                        <button onClick={handleSave} className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition-colors">
                            <Save size={18} /> Save Changes
                        </button>
                    </div>
                </div>
                
                <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                    {editData.map((sentences, idx) => (
                        <div key={idx} className={`p-4 border rounded-lg ${idx === assessmentIndex ? 'border-primary bg-blue-50' : 'border-gray-200'}`}>
                            <div className="flex justify-between mb-2">
                                <span className={`font-bold ${idx === assessmentIndex ? 'text-primary' : 'text-gray-700'}`}>
                                    Assessment {idx + 1} {idx === assessmentIndex && '(Current Assessment)'}
                                </span>
                                <button onClick={() => deletePassage(idx)} className="text-red-500 hover:bg-red-50 p-1 rounded transition-colors" title="Delete Passage">
                                    <Trash2 size={16}/>
                                </button>
                            </div>
                            <textarea 
                                className="w-full border border-gray-300 p-3 rounded-md h-32 font-mono text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                value={sentences.join('\n')}
                                onChange={(e) => updatePassage(idx, e.target.value)}
                                placeholder="Enter sentences here, one per line."
                            />
                        </div>
                    ))}
                    
                    <button 
                        onClick={addPassage} 
                        className="w-full py-4 border-2 border-dashed border-gray-300 text-gray-500 rounded-lg hover:border-primary hover:text-primary hover:bg-blue-50 transition-all flex justify-center items-center gap-2 font-semibold"
                    >
                        <Plus size={20} /> Add New Assessment Passage
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow h-full flex flex-col">
             <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-secondary">Task 1: Sentence Recognition</h2>
                    <p className="text-sm text-gray-500 font-semibold">Assessment Sequence: {assessmentIndex + 1}</p>
                </div>
                <button 
                    onClick={handleStartEdit} 
                    className="flex items-center gap-2 text-gray-600 hover:text-primary bg-gray-100 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors font-medium"
                >
                    <Edit2 size={18} /> Edit Passages
                </button>
            </div>

            <div className="flex-1">
                {currentPassage && currentPassage.length > 0 ? (
                    <div className="space-y-4">
                        {currentPassage.map((s, i) => (
                            <div key={i} className="p-5 border rounded-lg text-xl md:text-2xl font-comic bg-gray-50 border-gray-200 shadow-sm">
                                {s}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 text-gray-400 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                        <p className="text-lg font-semibold mb-2">No passage defined for Assessment {assessmentIndex + 1}.</p>
                        <p className="text-sm">Click "Edit Passages" to add sentences for this assessment number.</p>
                    </div>
                )}
            </div>

            <div className="flex justify-end mt-8 pt-6 border-t">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-lg shadow hover:shadow-lg transition-all flex items-center gap-2"
                >
                    Next Task <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};