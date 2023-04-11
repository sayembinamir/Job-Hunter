import { Accordion } from 'flowbite-react';
import React from 'react';

const Blog = () => {
    return (
        <div className='my-container mt-14'>
            <h1 className='text-3xl font-bold text-regalBlack text-center mb-12'>Frequently Asked Questions</h1>
            <Accordion alwaysOpen={true}>
                <Accordion.Panel>
                    <Accordion.Title>
                        When should you use context API?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            <span className='font-semibold text-regalBlack'>context API:</span> Context API is a built-in API. It makes it possible to pass data from parent to children nested deep down the component tree directly. Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is a custom hook?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            <span className='font-semibold text-regalBlack'>custom hook:</span> Custom hook is a function in React that allows you to extract common logic from components and reuse it across your application. custom hooks are a powerful tool in React that can help you create reusable and composable code, reduce code duplication, and make your codebase more maintainable.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is useRef?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            <span className='font-semibold text-regalBlack'>useRef:</span> useRef is a hook in React, which allows functional components to access and store mutable values that persist across component renderings. It returns an object with a current property, which can be used to store and access a mutable value. The value stored in the current property can be updated without causing a component re-render.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is useMemo?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            <span className='font-semibold text-regalBlack'>useMemo:</span> useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                </Accordion>
        </div>
    );
};

export default Blog;