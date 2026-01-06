function customRender(reactElement, container){
    /*
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */

    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children

    // Loop through props object to set attributes dynamically
    for(const prop in reactElement.props){
        if(prop === 'children') continue; // Skip children prop if present
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainCOntainer=document.querySelector('#root')

customRender(reactElement, mainCOntainer)