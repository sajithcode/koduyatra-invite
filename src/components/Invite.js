import './invite.css';
import { useEffect, useState } from 'react';

export default function Invite() {
    const codeSnippet = `
function Have_FOC_Event() {
  const today = new Date();
  
  if (today.getDate() === 4 && 
     (today.getMonth() + 1) === 7) {
    console.log(\``;

    const eventDetails = `
Welcome to Koduyatra

Organized By: 21/22 Batch FOC

    Date: Thursday, July 4, 2024

Time: from 6 PM onwards

Venue: J.W. Dayananda Somasundara Auditorium

We invite you to mark your calendars and
join us for an unforgettable evening.
    `;

    const codeAfterEvent = `\`);
    return true;
  }
}

Have_FOC_Event();
  `;

    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    const combinedSnippet = codeSnippet + eventDetails + codeAfterEvent;

    useEffect(() => {
        if (index < combinedSnippet.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + combinedSnippet[index]);
                setIndex(index + 1);
            }, 50); // Adjust typing speed here
            return () => clearTimeout(timeout);
        }
    }, [index, combinedSnippet]);

    return (
        <>
            <div className='invite-container'>
                <div className='codeSnippet'>
                    <pre>
                        {displayedText.split('\n').map((line, idx) => {
                            if (line.includes('Koduyatra')) {
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
                            } else if (line.includes('Organized By: 21/22 Batch FOC')) {
                                return (
                                    <span key={idx} className="eventDetails">
                                        <span className="organizerLabel">Organized By:</span>
                                        <span className="organizerValue"> 21/22 Batch FOC</span>
                                        <br />
                                    </span>
                                );
                                
                            }
                            else if (line.includes('Time: from 6 PM onwards')) {
                                return (
                                    <span key={idx} className="eventDetails">
                                        <span className="timeLabel">Time:</span>
                                        <span className="timeValue"> from 6 PM onwards</span>
                                        <br />
                                    </span>
                                );
                            }
                            
                            else if (line.includes('Venue: J.W. Dayananda Somasundara')) {
                                return (
                                    <span key={idx} className="eventDetails">
                                        <span className="venueLabel">Venue:</span>
                                        <span className="venueValue"> J.W. Dayananda Somasundara Auditorium</span>
                                        <br />
                                    </span>
                                );
                            } else if (line.includes('Welcome to Koduyatra') || line.includes('We invite you') || line.includes('join')) {
                                return (
                                    <span key={idx} className="eventDetails">
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
