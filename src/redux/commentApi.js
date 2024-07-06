import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://667393ca6ca902ae11b4a00d.mockapi.io";

export const commentApi = createApi({
	reducerPath: "comments",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	tagTypes: ["Comments"],
	endpoints: (builder) => ({
		getComments: builder.query({
			query: () => API_ENDPOINT,
			providesTags: ["Comments"],
		}),
		addComments: builder.mutation({
			query: (newComment) => ({
				url: API_ENDPOINT,
				method: "POST",
				body: newComment,
			}),
			invalidatesTags: ["Comments"],
		}),
		updateCommentCount: builder.mutation({
			query: ({ id, ...comment }) => ({
				url: `${API_ENDPOINT}/${id}`,
				method: "PUT",
				body: comment,
			}),
			invalidatesTags: ["Comments"],
		}),
	}),
});

export const {
	useGetCommentsQuery,
	useAddCommentsMutation,
	useUpdateCommentCountMutation,
} = commentApi;
