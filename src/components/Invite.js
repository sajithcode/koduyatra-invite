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
        
         on Thursday, July 4, 2024
        
            from 6 PM onwards

        at J.W. Dayananda Somasundara 
                 Auditorium

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
                            } else if (line.includes('on Thursday, July 4, 2024') || line.includes(' from 6 PM onwards') || line.includes('at J.W. Dayananda Somasundara') || line.includes('Auditorium')) {
                                return (
                                    <span key={idx} className="eventDate">
                                        {line}
                                        <br />
                                    </span>
                                );
                            } else if (line.includes('Welcome to Koduyatra') || line.includes('Venue:') || line.includes('Date:') || line.includes('Time:') || line.includes('Organized By:') || line.includes('We invite you') || line.includes('Auditorium') || line.includes('join')) {
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
