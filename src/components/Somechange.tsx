import React from 'react';

export default class Somechange extends React.Component {
    constructor ( props: string )
    {
        super( props );
        this.state = {
            
            
        }
    }
    componentDidMount()
    {
        let button: HTMLButtonElement |null = document.querySelector("button");
        if(button!=null){

        
         button.addEventListener("click", () => {


                let content:HTMLElement|null=document.querySelector("h1");
                if (content != null) {
                    content.style.backgroundColor= `rgb(50,20,85)`;
                    
                
                }
            });

        }
    }

    render() {
        return (
            <button>SomeChange</button>
        )
    }
}