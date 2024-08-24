



const Private = ({ children }) => {
    const isPrivate = false;
    if (!isPrivate) {
        return children
    }
    return <div style={{color:'red'}}>This Route is private! you can't access it</div>
}

export default Private