import React, { useState, useEffect } from 'react';
import { Volume2, Plus, RotateCcw, Edit2, Save, X } from 'lucide-react';
import { speakText, playSound } from '../utils';

interface Props {
    title: string;
    items: string[];
    onComplete: (score: number, missedItems: string[]) => void;
    onUpdateItems: (newItems: string[]) => void;
    gridCols?: number;
    showAdd?: boolean;
}

export const GridAssessment: React.FC<Props> = ({ title, items: initialItems, onComplete, onUpdateItems, gridCols = 5, showAdd = true }) => {
    const [items, setItems] = useState<string[]>(initialItems);
    const [scores, setScores] = useState<Record<number, boolean | null>>({});
    const [totalScore, setTotalScore] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [editModeIndex, setEditModeIndex] = useState<number | null>(null);
    const [fontSize, setFontSize] = useState(2.5);

    useEffect(() => {
        setItems(initialItems);
        setScores({});
        setTotalScore(0);
    }, [initialItems]);

    const handleMark = (idx: number, isCorrect: boolean) => {
        const oldScore = scores[idx];
        let newTotal = totalScore;

        if (isCorrect) {
            if (oldScore !== true) newTotal++;
            playSound('correct');
        } else {
            if (oldScore === true) newTotal--;
            playSound('incorrect');
        }
        
        if (newTotal < 0) newTotal = 0;
        setTotalScore(newTotal);
        setScores({ ...scores, [idx]: isCorrect });
    };

    const handleItemEdit = (idx: number, newVal: string) => {
        const newItems = [...items];
        newItems[idx] = newVal;
        setItems(newItems);
        onUpdateItems(newItems);
    };

    const handleReset = () => {
        setScores({});
        setTotalScore(0);
    };

    const handleFinish = () => {
        const missed = items.filter((_, idx) => scores[idx] === false);
        onComplete(totalScore, missed);
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary flex items-center gap-2">
                {title}
            </h2>
            
            <div className="bg-slate-50 p-4 rounded-lg flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-4">
                     <span className="font-bold text-lg bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
                        Score: {totalScore} / {items.length}
                     </span>
                     <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">Size:</span>
                        <input type="range" min="1" max="4" step="0.2" value={fontSize} onChange={e => setFontSize(parseFloat(e.target.value))} className="accent-primary" />
                     </div>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => speakText(items.join(', '))} className="p-2 rounded-full transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300"><Volume2 size={20}/></button>
                    <button onClick={handleReset} className="p-2 rounded-full transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300"><RotateCcw size={20}/></button>
                    {showAdd && <button onClick={() => { setItems([...items, '?']); }} className="p-2 rounded-full transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300"><Plus size={20}/></button>}
                </div>
            </div>

            <div 
                className="grid gap-4" 
                style={{ gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))` }} 
            >
                {items.map((item, idx) => {
                    const status = scores[idx];
                    let borderClass = 'border-transparent';
                    let bgClass = 'bg-white';
                    if (status === true) { borderClass = 'border-success'; bgClass = 'bg-green-50'; }
                    if (status === false) { borderClass = 'border-accent'; bgClass = 'bg-red-50'; }

                    return (
                        <div 
                            key={idx} 
                            className={`relative rounded-xl shadow-md p-4 flex flex-col items-center justify-between min-h-[160px] border-2 transition-all transform hover:-translate-y-1 ${borderClass} ${bgClass}`}
                        >
                            <div 
                                contentEditable 
                                suppressContentEditableWarning
                                onBlur={(e) => handleItemEdit(idx, e.currentTarget.textContent || '')}
                                className="w-full text-center font-comic font-bold text-secondary outline-none break-words"
                                style={{ fontSize: `${fontSize}rem` }}
                            >
                                {item}
                            </div>

                            <div className="flex gap-3 mt-4 w-full justify-center">
                                <button 
                                    onClick={() => handleMark(idx, true)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-transform hover:scale-110 ${status === true ? 'bg-success ring-2 ring-success ring-offset-1' : 'bg-gray-200 text-gray-400 hover:bg-success hover:text-white'}`}
                                >
                                    ✓
                                </button>
                                <button 
                                    onClick={() => handleMark(idx, false)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-transform hover:scale-110 ${status === false ? 'bg-accent ring-2 ring-accent ring-offset-1' : 'bg-gray-200 text-gray-400 hover:bg-accent hover:text-white'}`}
                                >
                                    ✗
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-end pt-4 border-t">
                <button onClick={handleFinish} className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition-colors">
                    Next Task →
                </button>
            </div>
        </div>
    );
};