import { Avatar } from '@material-ui/core';
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@material-ui/icons';
import React from 'react';
import './Post.css'

function Post() {
    return (
        <div className="post">
            <div className="post_info">
              <Avatar />
              <h5>User Id</h5>
              <small>Posting Time</small>
          </div>
          <div className="post_body">
              <div className="post_question">
                  <p>Qeustion</p>
                  <button className="post_btnAnswer">Answer</button>
              </div>
              <div className="post_answer">
                  <p>This in Answer</p>
                  <img src="https://www.sisain.co.kr/news/photo/200801/1009_1870_5615.jpg" alt=""/>
              </div>
          </div>
          <div className="post_footer">
              <div className="post_footerAction">
                  <ArrowUpwardOutlined />
                  <ArrowDownwardOutlined />
              </div>
              <RepeatOneOutlined />
              <ChatBubbleOutlineOutlined />
              <div className="post_footerRight">
                  <ShareOutlined />
                  <MoreHorizOutlined />
              </div>
          </div>
        </div>
    );
}

export default Post;