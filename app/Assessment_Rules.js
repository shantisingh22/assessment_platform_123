import React from 'react';
import './globals.css';

const AssessmentRules = () => {
    return (
        <>
            <div className='test'>MCQ Test Portal</div>
            <div className="rulessection">
                <div className='test1'>
                    <div className='box'>Instructions</div>
                    <div className='main-boxMCQ'>Please read the instructions carefully before you begin:</div>
                    <div className='main-box1'>
                        <ul className='list'>
                            <li>Timing: The test is timed. You have [specified time] minutes to complete all questions.</li>
                            <li>Questions: The test comprises [number of questions] multiple-choice questions (MCQs).</li>
                            <li>Navigation: You can navigate between questions using the 'Next' and 'Previous' buttons.</li>
                            <li>Selection: Choose the best answer for each question. You can change your answers anytime before submitting.</li>
                            <li>Submission: Once you have answered all questions, click the 'Submit' button. You must submit before the timer runs out.</li>
                            <li>Review: After submission, you may review your answers and scores.</li>
                        </ul>
                    </div>
                    <p className='paragraph1'>
                        Please ensure a stable internet connection. If you encounter any issues, contact support immediately.
                    </p>
                    <div className='paragraph-box'>
                        <div className='paragraph'>Click 'Let's Start' to begin the test.</div>
                        <div className='paragraph'><strong>Good luck!</strong></div>
                    </div>
                </div>
                <hr className="new1"></hr>
                <div className='bottonBox'>
                    <a href="/assessment" class="button">Let's Start!</a>
                </div>
            </div>
        </>
    );
};

export default AssessmentRules;
