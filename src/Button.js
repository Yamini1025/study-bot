function Button( { name, clickHandler} ) {
    return (
        <div>
            <button className="button" onClick={clickHandler}>{name}</button>
        </div>
    );
}

export default Button;