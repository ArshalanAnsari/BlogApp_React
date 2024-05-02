import React from "react";

function Button({
      children,
      type = 'text',
      bgColor = "bg-blue-600",
      textColor = "white",
      className = '',
      ...props
}){
      return(
            <button className={`px-4 py-2 rounded-lg ${className} ${textColor} ${bgColor}`} {...props}>
                  {children}
            </button>
      )

}

export default Button;