# Musk API 🚀

A hand-curated quotes from Elon Musk

## Base URL

#### https://muskapi.herokuapp.com/

## API Reference

#### Get all quotes

```
  GET /api/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get a specific quote

```
  GET /api/quote/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Add new quotes

```
  POST /api/admin
```

| Req.body  | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `adminId` | `string` | **Required**. Needed the account Id to add |
| `quote`   | `string` | **Required**. Add the quote                |

## Screenshots

<!-- ![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here) -->

```
{
  message: {
      type: "success",
      quoteId: "4cfdb0da-125e-4430-bf81-ca3e95b1147d",
      quotes: "It is possible for ordinary people to choose to be extraordinary.",
      URL: "https://muskapi.herokuapp.com/api/quote/4cfdb0da-125e-4430-bf81-ca3e95b1147d",
      addedBy: "hinzwifi"
  }
}
```

## FAQ

#### Why did you make this API?

- I wanted to learn how to make a REST API

#### I understand, though why is it Elon Musk though

- The only reason why because it is Elon Musk

## Acknowledgements

- [Fireship's 100 seconds about API ](https://www.youtube.com/watch?v=-MTSQjw5DrM)
- [chucknorris.io](https://api.chucknorris.io/)
- [kanye.rest](https://kanye.rest/)

## Lessons Learned

What did you learn while building this project?

- Still working on it
  What challenges did you face and how did you overcome them?
- Still working on it

## Authors

- [@hinzwifi](https://www.github.com/hinzwifi)

## Feedback

If you have any feedback, please reach out to me at markjoshuahaynes@protonmail.com
