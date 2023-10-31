import React from 'react'

function Text({ children , className}) {
    const commonClasses = 'text-neutral-50 text-base leading-normal font-medium';

    const combinedClasses = `${commonClasses} ${className}`;
  
    return <p className={combinedClasses}>{children}</p>;
}

export default Text