# Musk API 🚀

A hand-curated quotes from Elon Musk

## Base URL

#### https://muskapi.herokuapp.com/

## API Reference

#### Get all the quotes

```
  GET /api/
```

<br/>

#### Get a random quote

```
  GET /api/random
```

<br/>

#### Get a specific quote

```
  GET /api/quote/${id}
```

| Parameter | Type     | Required | Description                       |
| :-------- | :------- | :------- | :-------------------------------- |
| `id`      | `string` | `Yes`    | **Required**. Id of item to fetch |

<br/>

#### Add new quotes

```
  POST /api/admin
```

| Req.body  | Type     | Required | Description                  |
| :-------- | :------- | :------- | :--------------------------- |
| `adminId` | `string` | `Yes`    | Needed the account Id to add |
| `quote`   | `string` | `Yes`    | Add the quote                |

<br/>

## Screenshots

![App Screenshot](https://github.com/hinzwifi/MuskAPI/blob/9355814e00e9b65763e73eab3f03156253cfc012/MuskAPI.png)

## FAQ

#### Why did you make this API?

- I wanted to learn make a REST API

#### I understand, though why is it Elon Musk though

- It's Elon Musk, Why not?

## Acknowledgements

- [Fireship's 100 seconds about API ](https://www.youtube.com/watch?v=-MTSQjw5DrM)
- [chucknorris.io](https://api.chucknorris.io/)
- [kanye.rest](https://kanye.rest/)

## Lessons Learned

#### What did you learn while building this project?

- Express and Middleware

#### What challenges did you face and how did you overcome them?

- Looking for awesome quotes by Elon Musk

## Authors

- [@hinzwifi](https://www.github.com/hinzwifi)

## Feedback

If you have any feedback, please reach out to me at markjoshuahaynes@protonmail.com

## License

[MIT](https://choosealicense.com/licenses/mit/)
