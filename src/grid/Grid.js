import React from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';
import './grid-styles.css'
import './resizable-styles.css'

const ResponsiveGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

export default class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            layouts: JSON.parse(JSON.stringify(originalLayouts))
        };
    }

    onLayoutChange(layout, layouts) {
        saveToLS("layouts", layouts);
        this.setState({layouts});
    }

    render() {
        return (
            <ResponsiveGridLayout
                className="layout"
                layouts={this.state.layouts}
                // breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                cols={{lg: 12, md: 8, sm: 6, xs: 4, xxs: 0}}
                onLayoutChange={(layout, layouts) =>
                    this.onLayoutChange(layout, layouts)
                }
            >
                <div key="a" data-grid={{ w: 2, h: 1, x: 0, y: 0}}>a</div>
                <div key="b" data-grid={{ w: 2, h: 1, x: 0, y: 0}}>b</div>
                <div key="c" data-grid={{ w: 2, h: 1, x: 0, y: 0}}>c</div>
            </ResponsiveGridLayout>
        )
    }
};

function getFromLS(key) {
    let ls = {};
    if (localStorage) {
        try {
            ls = JSON.parse(localStorage.getItem("grid-layout")) || {};
        } catch (e) {
            /*Ignore*/
        }
    }
    return ls[key];
}

function saveToLS(key, value) {
    if (localStorage) {
        localStorage.setItem(
            "grid-layout",
            JSON.stringify({
                [key]: value
            })
        );
    }
}