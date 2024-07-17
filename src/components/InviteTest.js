import './invitetest.css';
import { useEffect, useState } from 'react';

export default function Invite() {
    const invitationText = `
You are invited to

Koduyatra 2024!

Date: Thursday, July 4, 2024

Time: 6 PM onwards

Venue: J.W. Dayananda Somasundara Auditorium

Make sure to mark your calendars and be 
part of this unforgettable experience. 


---

Students' Union  
Faculty of Computing  
Sabaragamuwa University of Sri Lanka
    `;

    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < invitationText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + invitationText[index]);
                setIndex(index + 1);
            }, 50); // Adjust typing speed here
            return () => clearTimeout(timeout);
        }
    }, [index, invitationText]);

    return (
        <>
            <div className='invite-container'>
                <div className='codeSnippet'>
                    <pre>
                        {displayedText.split('\n').map((line, idx) => {
                            if (line.includes('Koduyatra 2024!')) {
                                return (
                                    <span key={idx} className="eventDetails koduyatra">
                                        {line}
                                        <br />
                                    </span>
                                );
                            } else if (line.includes('Date: Thursday, July 4, 2024')) {
                                return (
                                    <span key={idx} className="eventDetails">
                                        <span className="dateLabel">Date:</span>
                                        <span className="dateValue"> Thursday, July 4, 2024</span>
                                        <br />
                                    </span>
                                );
                            } else if (line.includes('Time: 6 PM onwards')) {
                                return (
                                    <span key={idx} className="eventDetails">
                                        <span className="timeLabel">Time:</span>
                                        <span className="timeValue"> 6 PM onwards</span>
                                        <br />
                                    </span>
                                );
                            } else if (line.includes('Venue: J.W. Dayananda Somasundara Auditorium')) {
                                return (
                                    <span key={idx} className="eventDetails">
                                        <span className="venueLabel">Venue:</span>
                                        <span className="venueValue"> J.W. Dayananda Somasundara Auditorium</span>
                                        <br />
                                    </span>
                                );
                            } else if (line.includes('Students\' Union')) {
                                return (
                                    <span key={idx} className="eventDetails">
                                        {line}
                                        <br />
                                    </span>
                                );
                            } else if (line.includes('Faculty of Computing')) {
                                return (
                                    <span key={idx} className="eventDetails">
                                        {line}
                                        <br />
                                    </span>
                                );
                            } else if (line.includes('Sabaragamuwa University of Sri Lanka')) {
                                return (
                                    <span key={idx} className="eventDetails">
                                        {line}
                                        <br />
                                    </span>
                                );
                            } else if (line.includes('You are invited to') || line.includes('Make sure to mark your calendars') || line.includes('unforgettable experience') || line.includes('We look forward to seeing you there!')) {
                                return (
                                    <span key={idx} className="eventDetails event-footer">
                                        {line}
                                        <br />
                                    </span>
                                );
                            }
                            return (
                                <span key={idx}>
                                    {line}
                                    <br />
                                </span>
                            );
                        })}
                    </pre>
                </div>
            </div>
        </>
    );
}
