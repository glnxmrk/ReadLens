import React, { useState } from 'react';
import { Learner } from '../types';
import { Users, UserPlus, Trash2, Edit } from 'lucide-react';

interface Props {
    learners: Learner[];
    onAddLearner: (l: Learner) => void;
    onUpdateLearner: (l: Learner) => void;
    onDeleteLearner: (id: string) => void;
    onSelectLearner: (id: string) => void;
    currentLearnerId: string | null;
    onNext: () => void;
}

export const Enrollment: React.FC<Props> = ({ learners, onAddLearner, onUpdateLearner, onDeleteLearner, onSelectLearner, currentLearnerId, onNext }) => {
    const [form, setForm] = useState({ name: '', lrn: '', age: '', gender: '', grade: '1', language: 'filipino', notes: '' });
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = () => {
        if (!form.name || !form.age) return alert("Name and Age required");
        
        const newLearner: Learner = {
            id: isEditing && currentLearnerId ? currentLearnerId : Date.now().toString(),
            lrn: form.lrn || "N/A",
            name: form.name,
            age: parseInt(form.age),
            gender: form.gender,
            grade: parseInt(form.grade),
            language: form.language,
            notes: form.notes,
            enrollmentDate: new Date().toISOString(),
            assessments: isEditing && currentLearnerId ? learners.find(l => l.id === currentLearnerId)?.assessments || [] : []
        };

        if (isEditing) {
            onUpdateLearner(newLearner);
            setIsEditing(false);
        } else {
            onAddLearner(newLearner);
        }
        setForm({ name: '', lrn: '', age: '', gender: '', grade: '1', language: 'filipino', notes: '' });
    };

    const handleEdit = () => {
        if (!currentLearnerId) return;
        const l = learners.find(x => x.id === currentLearnerId);
        if (l) {
            setForm({
                name: l.name, lrn: l.lrn, age: l.age.toString(), gender: l.gender,
                grade: l.grade.toString(), language: l.language, notes: l.notes
            });
            setIsEditing(true);
        }
    };

    const inputClass = "p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all";
    const btnClass = "font-bold py-3 px-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-white";

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                <Users className="text-primary" /> Task 0: Learner Enrollment
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Form */}
                <div className="flex-1 space-y-4">
                    <h3 className="font-bold text-lg border-b pb-2">{isEditing ? 'Edit Learner' : 'Enroll New Learner'}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input className={inputClass} placeholder="LRN" value={form.lrn} onChange={e => setForm({...form, lrn: e.target.value})} />
                        <input className={inputClass} placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                        <input className={inputClass} type="number" placeholder="Age" value={form.age} onChange={e => setForm({...form, age: e.target.value})} />
                        <select className={inputClass} value={form.gender} onChange={e => setForm({...form, gender: e.target.value})}>
                            <option value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <select className={inputClass} value={form.grade} onChange={e => setForm({...form, grade: e.target.value})}>
                            <option value="1">Grade 1</option>
                            <option value="2">Grade 2</option>
                            <option value="3">Grade 3</option>
                        </select>
                        <select className={inputClass} value={form.language} onChange={e => setForm({...form, language: e.target.value})}>
                            <option value="filipino">Filipino</option>
                            <option value="bisaya">Bisaya</option>
                            <option value="english">English</option>
                        </select>
                    </div>
                    <textarea className={`${inputClass} w-full`} placeholder="Notes" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} />
                    
                    <div className="flex gap-2">
                        <button onClick={handleSubmit} className={`${btnClass} ${isEditing ? 'bg-warning' : 'bg-success'} flex-1`}>
                            {isEditing ? 'Update Learner' : 'Enroll Learner'}
                        </button>
                        {isEditing && <button onClick={() => { setIsEditing(false); setForm({ name: '', lrn: '', age: '', gender: '', grade: '1', language: 'filipino', notes: '' }); }} className={`${btnClass} bg-gray-500`}>Cancel</button>}
                    </div>
                </div>

                {/* List */}
                <div className="flex-1 border-l pl-0 lg:pl-8 space-y-4">
                    <h3 className="font-bold text-lg border-b pb-2">Enrolled Learners ({learners.length})</h3>
                    <select 
                        className="w-full p-3 border rounded-lg mb-4 font-semibold text-lg" 
                        value={currentLearnerId || ''} 
                        onChange={e => onSelectLearner(e.target.value)}
                    >
                        <option value="">-- Select Learner --</option>
                        {learners.sort((a,b) => a.name.localeCompare(b.name)).map(l => (
                            <option key={l.id} value={l.id}>{l.name} ({l.grade})</option>
                        ))}
                    </select>

                    <div className="flex gap-2">
                        <button onClick={onNext} disabled={!currentLearnerId} className={`${btnClass} bg-gradient-to-r from-primary to-secondary flex-1 disabled:opacity-50`}>
                            Start Assessment
                        </button>
                        <button onClick={handleEdit} disabled={!currentLearnerId} className={`${btnClass} bg-gray-500 disabled:opacity-50`}>
                            <Edit size={20} />
                        </button>
                        <button onClick={() => currentLearnerId && onDeleteLearner(currentLearnerId)} disabled={!currentLearnerId} className={`${btnClass} bg-accent disabled:opacity-50`}>
                            <Trash2 size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};