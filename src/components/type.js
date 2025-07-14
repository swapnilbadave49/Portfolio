import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const words = [
    "Hello, World!",
    "Welcome to my website!",
  ];
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      if (isDeleting) {
        setCurrentWord((prevWord) => prevWord.substring(0, j - 1));
        setJ((prevJ) => prevJ - 1);
        if (j === 0) {
          setIsDeleting(false);
          setI((prevI) => (prevI + 1) % words.length);
        }
      } else {
        setCurrentWord((prevWord) => prevWord.substring(0, j + 1));
        setJ((prevJ) => prevJ + 1);
        if (j === currentWord.length) {
          setIsDeleting(true);
        }
      }
      setTimeout(type, 100);
    };

    type();
  }, [i, j, isDeleting, currentWord]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 id="typewriter" className="text-4xl font-bold">
        {currentWord}
      </h1>
    </div>
  );
};

export default Typewriter;
