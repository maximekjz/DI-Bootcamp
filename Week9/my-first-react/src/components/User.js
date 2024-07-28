import Button from '@mui/material/Button';


const User = (props) => {
    console.log(props);

    const {id, name, username, email} = props
    const img = `https://robohash.org/${id}?size=150x150`;
    const style = {
        display: 'inline-block',
        border: '1px solid #000',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: 'lightgreen',
    };

    return (
        <>
            {/* <div className="usrs"> */}
            <div style = {style}>
                <h3>{id}</h3>
                <h2>{name}</h2>
                <h3>{username}</h3>
                <h3>{email}</h3>
                <img src = {img}/>
                <Button variant="contained">Contained</Button>
            </div>
        </>
    )
}

export default User

// return ne peut retourner qu'un objet, donc si je veux h1 et h2 je dois les mettre dans 1 "objet ", on peut le faire avec <> ... </>
// on appelle ça <React Fragment>   

// props pour un objet 