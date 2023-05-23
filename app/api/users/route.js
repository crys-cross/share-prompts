// > app
//  >users
//      >routes.js
//      >page.js ❌

// Nextjs support the following HTTP methods:
//1. **GET**: retrieves data or resources from the server
//2. **POST**: submits data to the server to create a new resource
//3. **PUT**: updates or replaces an existing resource on the server
//4. **PATCH**: partially updates an existing resource on the server
//5. **DELETE**: removes a specific resource from the server
//6. **HEAD**: retrieves the headers of a resource without fetching its body
//7. **OPTIONS**: retrieves the supported HTTP methods and other communication options for a resouce

// export async function GET(request) {
//   return new Response("Hello, Nextjs!");
// }
// // can use others as above

// http://localhost:3000/api/users
export async function GET(request) {
  // Handle GET request for /api/users
  // Retrieve users from the database or any data source
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];
  // Send the users as a response
  return new Response(JSON.stringify(users));
}
