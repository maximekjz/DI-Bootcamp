const Hello = (props) => {
    console.log(props);
    // const {title, sub} = props
    // return (
    //     <>
    //         <div>
    //             <h1>{title}</h1>
    //             <h2>{sub}</h2>
    //             <h1>Hello from Hello Component </h1>
    //             <h2> Hi</h2>
    //         </div>
    //     </>
    // )
    const {title, sub, body} = props.article
    return (
        <>
            <div>
                <h1>{title}</h1>
                <h2>{sub}</h2>
                <h3>{body}</h3>
            </div>
        </>
    )
}

export default Hello

// return ne peut retourner qu'un objet, donc si je veux h1 et h2 je dois les mettre dans 1 "objet ", on peut le faire avec <> ... </>
// on appelle ça <React Fragment>   

// props pour un objet 