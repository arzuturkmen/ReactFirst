//rcc for shortcuts

import React, {Component} from 'react';

class Basic extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text"/>
                    <button>Gönder</button>
                </form>
            </div>
        );
    }
}

export default Basic; // başka Class'larda kullanmak için export ediliyor.