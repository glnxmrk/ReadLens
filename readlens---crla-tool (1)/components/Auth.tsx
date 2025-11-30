import React, { useState } from 'react';
import { Book, User as UserIcon } from 'lucide-react';
import { User } from '../types';

interface AuthProps {
    onLogin: (user: User) => void;
}

export const Auth: React.FC<AuthProps> = ({ onLogin }) => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [name, setName] = useState('');
    const [school, setSchool] = useState('');
    const [grade, setGrade] = useState('');
    const [password, setPassword] = useState('');
    const [secretCode, setSecretCode] = useState('');

    const handleLogin = () => {
        const storedUserStr = localStorage.getItem('readLens_user');
        if (!storedUserStr) return alert("No user found. Please create an account.");
        
        const storedUser = JSON.parse(storedUserStr);
        if (storedUser.name === name && storedUser.password === password) {
            onLogin(storedUser);
        } else {
            alert("Invalid credentials.");
        }
    };

    const handleRegister = () => {
        if (!name || !school || !grade || !password) return alert("All fields required.");
        if (secretCode !== "ADMIN-RL-2025!") return alert("Invalid Secret Code.");

        const user: User = { name, school, grade, password };
        localStorage.setItem('readLens_user', JSON.stringify(user));
        localStorage.setItem('crlaSchoolName', school);
        localStorage.setItem('crlaGradeSection', grade);
        localStorage.setItem('crlaTeacherName', name);
        
        alert("Account created! Please log in.");
        setIsRegistering(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
                <div className="bg-gradient-to-br from-primary to-secondary p-8 flex flex-col items-center text-white relative">
                    <div className="bg-white text-primary w-24 h-24 rounded-full flex items-center justify-center shadow-lg mb-4">
                        <Book size={48} />
                    </div>
                    <h1 className="text-4xl font-extrabold mb-1">ReadLens</h1>
                    <p className="opacity-90 text-sm">Comprehensive Reading Literacy Assessment</p>
                </div>

                <div className="p-8">
                    {!isRegistering ? (
                        <div className="space-y-4">
                            <input 
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                                placeholder="Teacher's Name / Username"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <input 
                                type="password"
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <button 
                                onClick={handleLogin}
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold p-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                            >
                                Log In
                            </button>
                            <div className="text-center text-sm text-gray-500 mt-4">
                                First time user? <button onClick={() => setIsRegistering(true)} className="text-primary font-bold hover:underline">Create an Account</button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <input className="w-full p-3 border-2 border-gray-200 rounded-lg" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
                            <input className="w-full p-3 border-2 border-gray-200 rounded-lg" placeholder="School Name" value={school} onChange={e => setSchool(e.target.value)} />
                            <input className="w-full p-3 border-2 border-gray-200 rounded-lg" placeholder="Grade & Section" value={grade} onChange={e => setGrade(e.target.value)} />
                            <input type="password" className="w-full p-3 border-2 border-gray-200 rounded-lg" placeholder="Create Password" value={password} onChange={e => setPassword(e.target.value)} />
                            <input type="password" className="w-full p-3 border-2 border-gray-200 rounded-lg" placeholder="Secret Code" value={secretCode} onChange={e => setSecretCode(e.target.value)} />
                            <button onClick={handleRegister} className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold p-3 rounded-lg">Create Account</button>
                            <div className="text-center text-sm text-gray-500">
                                Already have an account? <button onClick={() => setIsRegistering(false)} className="text-primary font-bold">Log In</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="text-white/70 text-xs mt-8 text-center max-w-lg">
                Developed by Glenn Mark S. Presores & Rosavelia O. Jimenez<br/>
                San Jose Integrated School, Quezon I District
            </div>
        </div>
    );
};
