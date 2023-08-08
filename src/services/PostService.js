import http from "./http";

class PostService {
  getAllPost() {
    return http.get("/post");
  }

  getAllPostCount() {
    return http.get("/post/count");
  }

  getTopPost() {
    return http.get("/post/topPosts");
  }

  getTopCategories() {
    return http.get("/post/topPostCategories");
  }

  getAllCategories(search, sortFieldCategories, sortOrderCategories) {
    return http
      .get("/post/allPostCategories", {
        params: {
          search: search,
          sortFieldCategories: sortFieldCategories,
          sortOrderCategories: sortOrderCategories,
        },
      })
      .then((response) => {
        // Return the response or perform other actions
        return response;
      });
  }

  getTopUsers() {
    return http.get("/post/topUsers");
  }

  getAllUsersWithPostDetails(search, sortFieldUsers, sortOrderUsers) {
    return http
      .get("/post/users-with-post-count-and-likes", {
        params: {
          search: search,
          sortFieldUsers: sortFieldUsers,
          sortOrderUsers: sortOrderUsers,
        },
      })
      .then((response) => {
        // Return the response or perform other actions
        return response;
      });
  }

  getAllPostPaginated(page, size, search, sortFieldPosts, sortOrderPosts) {
    return http
      .get("/post/paginated", {
        params: {
          page: page,
          size: size,
          search: search,
          sortFieldPosts: sortFieldPosts,
          sortOrderPosts: sortOrderPosts,
        },
      })
      .then((response) => {
        // Return the response or perform other actions
        return response;
      });
  }

  getPostByid(postId) {
    return http.get("/post/" + postId);
  }

  postQuestion(title, postCategories, question, user) {
    return http.post("/post", {
      title,
      postCategories,
      question,
      user,
    });
  }

  likePost(postId, userId) {
    return http.put("/post/like/" + postId + "/" + userId);
  }

  unLikePost(postId, userId) {
    return http.put("/post/unlike/" + postId + "/" + userId);
  }

  addComment(postId, userId, comment) {
    return http.post("/post/comment", {
      postId,
      userId,
      comment,
    });
  }

  replyToComment(userId, commentId, commentReply) {
    return http.post("/post/comment/reply", {
      userId,
      commentId,
      commentReply,
    });
  }

  likeComment(commentId, userId) {
    return http.put("/post/comment/like/" + commentId + "/" + userId);
  }

  unLikeComment(commentId, userId) {
    return http.put("/post/comment/unlike/" + commentId + "/" + userId);
  }

  editComment(commentId, commentMessage, post, user) {
    return http.put("/post/comment/" + commentId, {
      commentMessage,
      post,
      user,
    });
  }

  deleteComment(commentId, post, user) {
    return http.delete("/post/comment/" + commentId, {
      data: {
        post,
        user,
      },
    });
  }

  dislikePost(postId, userId) {
    return http.put("/post/dislike/" + postId + "/" + userId);
  }

  undislikePost(postId, userId) {
    return http.put("/post/undislike/" + postId + "/" + userId);
  }

  dislikeComment(commentId, userId) {
    return http.put("/post/comment/dislike/" + commentId + "/" + userId);
  }

  unDislikeComment(commentId, userId) {
    return http.put("/post/comment/undislike/" + commentId + "/" + userId);
  }

  deletePost(id, userInCharged) {
    return http.delete("/post/" + id, {
      data: {
        userInCharged,
      },
    });
  }

  editPost(title, postCategories, question, postId, user) {
    return http.put("/post/" + postId, {
      title,
      question,
      postCategories,
      user,
    });
  }

  //reply service
  editReply(replyId, replyMessage) {
    return http.put("/post/comment/reply/" + replyId, {
      replyMessage,
    });
  }

  deleteReply(commentId, replyId) {
    return http.put("/post/comment/" + commentId + "/reply/" + replyId);
  }

  likeReply(replyId, userId) {
    return http.put("/post/comment/reply/like/" + replyId + "/" + userId);
  }

  unLikeReply(replyId, userId) {
    return http.put("/post/comment/reply/unlike/" + replyId + "/" + userId);
  }
}

export default new PostService();
