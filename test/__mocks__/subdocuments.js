/**
 *
 * Author:  Reysmer Valle
 *
 * License: MIT - Copyright (c) Reysmer Valle
 *
 */

const documentMock = {
  _id: 1,
  name: "Johnny Content Creator",
  posts: [
    {
      _id: 2,
      value: "one",
      mentions: [],
    },
    {
      _id: 3,
      value: "two",
      mentions: [
        {
          _id: 5,
          text: "apple",
        },
        {
          _id: 6,
          text: "orange",
        },
      ],
    },
    {
      _id: 4,
      value: "three",
      mentions: [],
    },
  ],
};

const mutationObjectMock1 = { posts: [{ _id: 2, value: "too" }] };
const mutationObjectMock2 = { posts: [{ value: "four" }] };
const mutationObjectMock3 = {
  posts: [{ _id: 3, mentions: [{ _id: 5, text: "pear" }] }],
};
const mutationObjectMock4 = {
  posts: [{ _id: 3, mentions: [{ text: "banana" }] }],
};
const mutationObjectMock5 = { posts: [{ _id: 2, _delete: true }] };
const mutationObjectMock6 = {
  posts: [
    { _id: 2, value: "too" },
    { value: "four" },
    { _id: 4, _delete: true },
  ],
};

const updateOutputMock1 = {
  $update: {
    "posts.0.value": "too",
  },
};

const updateOutputMock3 = {
  $update: {
    "posts.1.mentions.0.text": "pear",
  },
};

module.exports = {
  documentMock,
  mutationObjectMock1,
  mutationObjectMock2,
  mutationObjectMock3,
  mutationObjectMock4,
  mutationObjectMock5,
  mutationObjectMock6,
  updateOutputMock1,
  updateOutputMock3
};
