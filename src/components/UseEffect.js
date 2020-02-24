import React, {Component} from 'react';

// Tekrarlanan bir component üretmek için childrenların callback'leri çağırır
function Repeat(props) {
    let items = [];
    let showHeader = false;
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{showHeader && <Header/>}{items}</div>;
}

function Header() {
    return <div><h1>Merhaba Canımlar !!</h1></div>
}

function ListOfTenThings() {
    return (

        <Repeat numTimes={10}>
            {(index) => <div key={index}>Bu listede {index} olan öğedir.</div>}
        </Repeat>
    );
}

export default ListOfTenThings;