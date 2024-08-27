import React from 'react';

const NotFound = () => {
  return (
    <div className={`h-screen flex justify-center items-center`}>
       <div className={``}>
            <h1 className={`text-2xl font-[Mono-sans-bold]`}>404 - Page Not Found</h1>
            <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
       </div>
    </div>
  );
};

export default NotFound;