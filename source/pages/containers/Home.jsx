import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Post from '../../posts/containers/Post.jsx';
import Loading from '../../shared/components/loading.jsx';

import api from '../../api.js';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      page: 1,
      full:false,
      posts: [],
      loading: true,
    };
    this.handleScrol = this.handleScrol.bind(this);
  }
  

  async componentDidMount() {
    
    const posts = await api.posts.getList(this.state.page);

    this.setState({
      posts,
      page: this.state.page + 1,
      full:false,
      loading: false,
    });
    window.addEventListener('scroll',this.handleScrol);
  }
  componentWillUnmount () {
    window.removeEventListener('scroll',this.handleScrol);
  }
  
  handleScrol(event){
    
    if(this.state.loading) return null;
    const scrolled = document.body.scrollTop;
    const strollwidth = document.body.scrollWidth
    const scrollHeight = document.body.scrollHeight;
  
    
    if(!(scrolled +strollwidth >= scrollHeight) || this.state.full === true){
      return null;
    }
        
    this.setState({loading: true},async () =>{
      
      try{
        const posts = await api.posts.getList(this.state.page);
        debugger

        this.setState({
          posts: this.state.posts.concat(posts),
          loading: false,
          page: this.state.page +1,
          full: (posts.length === 0)?true:false ,
          
        })

        
      }catch(error){
        console.log(error);
        this.setState({loading:false});
      }
    })

  }
  render() {
    return (
      <section name="Home">
        <h1>Home</h1>
        <section>
          {this.state.loading && (
             <Loading />
          )}
          {this.state.posts
            .map(post => <Post key={post.id} {...post} />)}
        </section>
        <Link to="/about">
          Go to about
        </Link>
      </section>
    );
  }
}

export default Home;