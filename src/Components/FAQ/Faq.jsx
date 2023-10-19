import React, { useState } from 'react';
import faqImage from '../../../public/Image/faq.jpg';

const Faq = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);

    const handleAccordionClick = (index) => {
        setActiveAccordion(index === activeAccordion ? -1 : index);
    };
    
    const faqData = [
        {
            question: 'How can I book an event with your service?',
            answer:
                'To book an event with us, simply visit our website and navigate to the "Book an Event" page. You can choose from a variety of event packages and customization options. Once you\'ve made your selection, fill out the booking form with your event details, and our team will get in touch with you to confirm the booking.',
        },
        {
            question: 'What types of events do you specialize in?',
            answer:
                'We specialize in a wide range of social events, including birthdays, weddings, anniversaries, and more. Our team of experienced event planners can create customized experiences for any occasion. Whether you\'re planning an intimate gathering or a large celebration, we have the expertise to make your event memorable.',
        },
        {
            question: 'Can I request specific themes or decorations for my event?',
            answer:
                'Yes, absolutely! We understand that every event is unique, and we\'re here to bring your vision to life. You can request specific themes, decorations, color schemes, and any other personalized elements for your event. Our team will work closely with you to ensure that your event reflects your style and preferences.',
        },
        {
            question: 'What is your cancellation policy?',
            answer:
                'Our cancellation policy depends on the type of event and the timing of the cancellation. We understand that circumstances can change, so please refer to our cancellation policy page on our website for detailed information about cancellation fees and deadlines.',
        },
        {
            question: 'Can I make changes to my event details after booking?',
            answer:
                'Yes, you can make changes to your event details after booking, but please keep in mind that some changes may incur additional charges or affect the availability of certain services. To make changes, contact our customer support team as soon as possible, and they will assist you in updating your event plans.',
        },
    ];
    return (
        <div className='container mx-auto py-8 px-2'>
            <h1 className='text-4xl text-center py-10 font-bold'>FAQ</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-5'>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='space-y-3 flex flex-col justify-center'>
                    {faqData.map((item, index) => (
                        <div
                            className={`collapse collapse-arrow bg-base-200 ${
                                index === activeAccordion ? 'collapse-active' : ''
                            }`}
                            key={index}
                        >
                            <input
                                type='radio'
                                name='my-accordion-2'
                                checked={index === activeAccordion}
                                onChange={() => handleAccordionClick(index)}
                            />
                            <div className='collapse-title text-xl font-medium'>
                                {item.question}
                            </div>
                            <div className='collapse-content'>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <img src={faqImage} className='rounded-md' alt='' />
                </div>
            </div>
        </div>
    );
};

export default Faq;

