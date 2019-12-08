import React from "react";
import SearchBar from "../SearchBar";
import RedditItem from "./RedditItem";
import Dropdown from "react-dropdown";
import './reddit.css';
import _ from "lodash";


export default class Reddit extends React.Component {
    constructor(props) {
        super(props);

        this.url = 'https://www.reddit.com/';
        this.sorts = ['hot', 'new', 'top', 'controversial', 'rising'];

        this.changeSort = this.changeSort.bind(this);
        this.changeSubreddit = this.changeSubreddit.bind(this);
    }

    state = {
        currentSubreddit: '',
        sort: 'hot',
        files: [],
        after: null,
        before: null,
        page: 1
    };

    componentDidMount() {
        this.changeSubreddit(this.state.currentSubreddit);
    }

    handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            console.log('header bottom reached');
            this.nextPage();
        }
    };

    nextPage = () => {
        fetch(this.url + this.state.currentSubreddit + "/" + this.state.sort + ".json?count=" + (this.state.page * 25) + "&after=" + this.state.after)
            .then(res => res.json())
            .then((data) => {
                this.setState(() => ({
                    files: this.state.files.slice().concat(data.data.children),
                    after: data.data.after,
                    before: data.data.before,
                    page: this.state.page + 1
                }));
            })
            .catch(console.log)
    };

    changeSubreddit(sub) {
        this.setState({
            files: [],
            currentSubreddit: sub,
            page: 1
        });
        fetch(this.url + sub + "/" + this.state.sort + '.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    files: data.data.children,
                    after: data.data.after,
                    before: data.data.before
                });
            })
            .catch(console.log)
    }

    changeSort(sort) {
        this.setState({
            files: [],
            sort: sort,
            page: 1
        });
        fetch(this.url + this.state.currentSubreddit + "/" + sort + '.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    files: data.data.children,
                    after: data.data.after,
                    before: data.data.before
                });
                window.scrollTo(0, 0);
            })
            .catch(console.log)
    }

    //https://www.reddit.com/r/formuladank/top/.json?count=20
    render() {
        return (
            <div className='feed'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <SearchBar/>
                    </div>
                    <Dropdown options={this.sorts} onChange={(obj) => this.changeSort(obj.value)} value={'Sort by'}
                              placeholder="Select an option"/>
                </div>
                <div className='reddit-items' onScroll={this.handleScroll}>
                {this.state.files.map((file) => (
                    <RedditItem key={file.data.id} file={file}/>
                ))}
                </div>
            </div>
        );
    }

}