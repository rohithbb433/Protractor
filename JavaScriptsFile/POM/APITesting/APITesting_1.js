const apiResource = require("protractor-api-resource").ProtractorApiResource;
describe("Test response for all REST API methods", function () {
    var apiClient, serviceEnpoints = {
        getPosts: {
            path: "/posts/:postId:"
        },
        createPost: {
            path: "/posts",
            method: "POST"
        },
        updatePost: {
            path: "/posts/:postId:",
            method: "PUT"
        },
        patchPost: {
            path: "/posts/:postId:",
            method: "PATCH"
        },
    };
    beforeAll(function () {
        apiClient = new apiResource("https://jsonplaceholder.typicode.com/");
        apiClient.registerService(serviceEnpoints);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJVGVzdGluZ18xLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUE9NL0FQSVRlc3RpbmcvQVBJVGVzdGluZ18xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDO0FBRTdFLFFBQVEsQ0FBQyx3Q0FBd0MsRUFBRTtJQUUvQyxJQUFJLFNBQVMsRUFBRSxlQUFlLEdBQUc7UUFDN0IsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLGlCQUFpQjtTQUMxQjtRQUNELFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLE1BQU07U0FDakI7UUFDRCxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLE1BQU0sRUFBRSxLQUFLO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsSUFBSSxFQUFFLGlCQUFpQjtZQUN2QixNQUFNLEVBQUUsT0FBTztTQUNsQjtLQUNKLENBQUM7SUFFRixTQUFTLENBQUM7UUFDTixTQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUNyRSxTQUFTLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==