const users = [
    {
      id: 1,
      name: "John",
      location: "New York",
      friends: [2, 3, 4],
      posts: [
        { content: "Great day at Central Park!", timestamp: "2024-09-17T12:00:00", likes: 15 },
        { content: "Loving the vibes in NYC!", timestamp: "2024-09-17T08:30:00", likes: 8 },
        { content: "Visited the Statue of Liberty today!", timestamp: "2024-09-17T17:45:00", likes: 20 }
      ]
    },
    {
      id: 2,
      name: "Alice",
      location: "San Francisco",
      friends: [1, 3],
      posts: [
        { content: "Hiking in the Bay Area!", timestamp: "2024-09-17T14:20:00", likes: 12 },
        { content: "Enjoying the sunny weather!", timestamp: "2024-09-17T11:10:00", likes: 6 }
      ]
    },
    {
      id: 3,
      name: "Emily",
      location: "Los Angeles",
      friends: [1, 2, 4],
      posts: [
        { content: "Beach day in LA!", timestamp: "2024-09-17T09:45:00", likes: 25 },
        { content: "Exploring Hollywood!", timestamp: "2024-09-17T16:55:00", likes: 5 }
      ]
    },
    {
      id: 4,
      name: "David",
      location: "Chicago",
      friends: [2],
      posts: [
        { content: "Deep dish pizza is the best!", timestamp: "2024-09-17T10:30:00", likes: 18 },
        { content: "Trying out a new jazz club tonight!", timestamp: "2024-09-17T20:00:00", likes: 3 }
      ]
    },
    {
      id: 5,
      name: "Sarah",
      location: "Seattle",
      friends: [3, 1],
      posts: [
        { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-09-17T15:15:00", likes: 9 },
        { content: "Exploring the Olympic National Park!", timestamp: "2024-09-17T07:00:00", likes: 11 }
      ]
    }
  ];

  const getRecentPosts = (posts) => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return posts.filter(post => new Date(post.timestamp) >= oneWeekAgo);
  };
  
  const getPopularPosts = (posts) => posts.filter(post => post.likes >= 10);
  
  const calculateLikesPerUser = (users) => {
    // Filter active users who have posted in the past week
    const activeUsers = users.filter(user => getRecentPosts(user.posts).length > 0);
  
    // Extract popular posts from active users
    const popularPosts = activeUsers.flatMap(user => getPopularPosts(user.posts));
    
    // Calculate average likes per user
    const totalLikes = popularPosts.reduce((sum, post) => sum + post.likes, 0);
    const totalUsers = activeUsers.length;
    const averageLikesPerUser = totalUsers === 0 ? 0 : totalLikes / totalUsers;
    
    return {
      numberOfActiveUsers: totalUsers,
      totalPopularPosts: popularPosts.length,
      averageLikesPerUser: averageLikesPerUser
    };
  };
  
  // Example usage
  const result = calculateLikesPerUser(users);
  console.log(result);
  