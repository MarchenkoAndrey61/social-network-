import React from "react";
import spec from './specPost.module.css';


class Post extends React.Component {
    state = {
      visible: false,
      visible_form: false,
      comment: ''
    }

    render(){


        let index
        const number_post = this.props.match.params.post
        const post = this.props.data.post

        const onBtnShowComments = () => {
          this.setState({ visible: true })
        }

        const onBtnHideComments = () => {
          this.setState({ visible: false })   
        }

        const showFormComment = () => {
          this.setState({ visible_form: true })
        }

        const changeNewComment = (e) => {
          this.setState({ comment: e.currentTarget.value })
        }

        let showPost = post.find( (p) => p.id === Number(number_post))
        const onBtnAddComment = (e) => {
          e.preventDefault()
          let thisPost = index
          showPost.comment = this.state.comment
          const data = showPost
          this.props.onAddComment(data, thisPost)
          this.setState({ comment: '' })
        }

        const findPost = () => {
          post.forEach(i => {
            if (i.id === Number(number_post)) {
              index = post.indexOf(i)
            }
          })
        }

        if (showPost) {
          {findPost()}
          return (
            <div className={spec.main}>
              <div className = {spec.topContent}>
                <div className = {spec.title}> 
                    <div>
                      <img src = "https://s.yimg.com/ny/api/res/1.2/7bbMUDnuJ0DeybIOk_CVzQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/68ead40c4b63a59b3c33c2e01a647f19" 
                          alt = "avatar"
                      />
                    </div>
                    <div className = {spec.user}>
                      <div>
                        <h5>username</h5>
                      </div>
                      <div>
                        <h6>add:</h6>
                      </div>
                    </div>
                  </div>
                <div>
                  <div className = {spec.postContent} >
                    <h1> {showPost.title} </h1>
                    <h4> {showPost.description} </h4>
                  </div>
                  
                  {
                    !this.state.visible && <button onClick={onBtnShowComments}>Show comments</button>
                  }
                  {
                    this.state.visible && <button onClick={onBtnHideComments}>Hide comments</button>
                  }
                  <button onClick={showFormComment}>Add comments</button>
                  {
                    this.state.visible && <p>{showPost.comment}</p>
                  }
                  {
                    this.state.visible_form &&
                    <form>
                      <textarea onChange={changeNewComment}></textarea>
                      <button onClick={onBtnAddComment}>Add comment</button>
                    </form>
                  }
                </div>
              </div>
          </div>
          )
        } else {
            return (
              <p>This post not found </p>
            )  
        }
    }
}          

export default Post