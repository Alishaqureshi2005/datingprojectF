import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    profileData: {
      userName: "Ethi",
      profilePicture: "/assets/Images/profile_png/dp.png",
      friends: [
        { name: "Sahir", image: "/assets/Images/profile_png/f5.png", active: false },
        { name: "Ponam", image: "/assets/Images/profile_png/f7.png", active: true },
        { name: "John", image: "/assets/Images/profile_png/f8.png", active: true },
        { name: "Sandi", image: "/assets/Images/profile_png/f9.png", active: false },
        { name: "Maria", image: "/assets/Images/profile_png/jolli.png", active: true },
        { name: "Aliza", image: "/assets/Images/profile_png/f6.png", active: false },
      ],
      posts: [
        {
          userName: "Ethi",
          Dp: "/assets/Images/profile_png/dp.png",
          type: "image",
          src: "/assets/Images/bg6.png",
          visitorImg: "/assets/Images/profile_png/c6.png",
          comments: [
            { id: 1, name: "Jolli", img: "/assets/Images/profile_png/c1.png" },
            { id: 2, name: "Lily", img: "/assets/Images/profile_png/c2.png" },
            { id: 3, name: "Sophia", img: "/assets/Images/profile_png/c3.png" },
            { id: 4, name: "Grace", img: "/assets/Images/profile_png/c6.png" },
          ],
        },
        {
          userName: "Ethi",
          Dp: "/assets/Images/profile_png/dp.png",
          type: "image",
          src: "/assets/Images/bg4.png",
          visitorImg: "/assets/Images/profile_png/c6.png",
          comments: [
            { id: 1, name: "Jolli", img: "/assets/Images/profile_png/c1.png" },
            { id: 2, name: "Lily", img: "/assets/Images/profile_png/c2.png" },
            { id: 3, name: "Sophia", img: "/assets/Images/profile_png/c3.png" },
            { id: 4, name: "Grace", img: "/assets/Images/profile_png/c6.png" },
          ],
        },
      ],
      events: {
        categories: [
          { name: "Classics", icon: "fas fa-heart" },
          { name: "Comedy", icon: "fas fa-theater-masks" },
          { name: "Crafts", icon: "fas fa-crown" },
          { name: "Dance", icon: "fas fa-music" },
          { name: "Drinks", icon: "fas fa-cocktail" },
        ],
        event: [
          {
            name: "Event 1",
            date: "2023-10-01",
            image: {
              alt: "Sunglasses and mustache illustration",
              src: "/assets/Images/p1.png",
            },
            isOwner: false,
          },
          {
            name: "Event 2",
            date: "2023-10-02",
            image: {
              alt: "Wine bottles and glasses illustration",
              src: "/assets/Images/p2.png",
            },
            isOwner: true,
          },
          {
            name: "Event 3",
            date: "2023-10-03",
            image: {
              alt: "Music note illustration",
              src: "/assets/Images/p4.png",
            },
            isOwner: false,
          },
          {
            name: "Event 4",
            date: "2023-10-03",
            image: {
              alt: "Bottle and glass illustration",
              src: "/assets/Images/p5.png",
            },
            isOwner: true,
          },
          {
            name: "Event 5",
            date: "2023-10-03",
            image: {
              alt: "Ring illustration",
              src: "/assets/Images/p6.png",
            },
            isOwner: false,
          },
          {
            name: "Event 6",
            date: "2023-10-03",
            image: {
              alt: "Gift illustration",
              src: "/assets/Images/p2.png",
            },
            isOwner: false,
          },
          {
            name: "Event 7",
            date: "2023-10-03",
            image: {
              alt: "Sunglasses and mustache illustration",
              src: "/assets/Images/p3.png",
            },
            isOwner: true,
          },
        ],

      },
      groupData : {
        suggestedGroups: [
          {
            id: 1,
            image: "/assets/Images/group/download.jpg",
            title: "Educational Academy",
            members: "192K members",
            posts: "10+ posts a day",
            friends: "48 friends are members",
            profileImages: [
              "/assets/Images/profile_png/c1.png",
              "/assets/Images/profile_png/c2.png",
              "/assets/Images/profile_png/c3.png",
            ],
          },
          {
            id: 2,
            image: "/assets/Images/group/download-1.jpg",
            title: "Education and Cultural Exchange",
            members: "292K members",
            posts: "12+ posts a day",
            friends: "Abdul Nafees and 56 friends are members",
            profileImages: [
              "/assets/Images/profile_png/c1.png",
              "/assets/Images/profile_png/c2.png",
              "/assets/Images/profile_png/c3.png",
            ],
          },
          {
            id: 3,
            image: "/assets/Images/group/download-2.jpg",
            title: "National Education Authority",
            members: "818K members",
            posts: "15+ posts a day",
            friends: "Syed Ahmed and 198 friends are members",
            profileImages: [
              "/assets/Images/profile_png/c1.png",
              "/assets/Images/profile_png/c2.png",
              "/assets/Images/profile_png/c3.png",
            ],
          },
          {
            id: 4,
            image: "/assets/Images/group/download-3.jpg",
            title: "Tech in Education",
            members: "150K members",
            posts: "5+ posts a day",
            friends: "Ali Khan and 12 friends are members",
            profileImages: [
              "/assets/Images/profile_png/c1.png",
              "/assets/Images/profile_png/c2.png",
              "/assets/Images/profile_png/c3.png",
            ],
          },
          {
            id: 5,
            image: "/assets/Images/group/download-4.jpg",
            title: "Readers' Hub",
            members: "90K members",
            posts: "8+ posts a day",
            friends: "Sarah Malik and 34 friends are members",
            profileImages: [
              "/assets/Images/profile_png/c1.png",
              "/assets/Images/profile_png/c2.png",
              "/assets/Images/profile_png/c3.png",
            ],
          },
        ],
        sidebarGroups: {
          joinedGroups: [
            { icon: "/assets/Images/game/G11.png", text: "Classics World" },
            { icon: "/assets/Images/game/G12.png", text: "Action" },
            { icon: "/assets/Images/game/G10.png", text: "Crafts" },
          ],
          managedGroups: [
            { icon: "/assets/Images/game/G10.png", text: "Classics" },
          ],
        },
      },

    },
  },
  reducers: {
    setData: (state, action) => {
      state.items = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload; // Action to set profile data
    },
  },
});

export const { setData, setProfile } = dataSlice.actions;
export default dataSlice.reducer;
