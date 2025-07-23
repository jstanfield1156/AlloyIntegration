# Alloy API Integration Demo

This project demonstrates a full-stack web application that integrates with the **Alloy Sandbox API** to simulate real-time applicant evaluations.

## 🔧 Tech Stack

- **Frontend**: React (with Axios)
- **Backend**: Node.js, Express
- **Environment Variables**: Managed via `.env` and `dotenv`
- **API**: [Alloy Evaluations API](https://developer.alloy.com/reference/post_evaluations)

---

## 📦 Project Structure

```
alloy-api-integration/
├── client/              # React frontend
│   ├── src/
│   │   └── App.js       # Main form and result UI
│   └── package.json
├── index.js             # Express server, handles Alloy API calls
├── .env                 # Contains ALLOY_TOKEN and ALLOY_SECRET (not committed)
└── README.md
```

---

## 🚀 Getting Started (Local)

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/alloy-api-integration.git
cd alloy-api-integration
```

### 2. Install Server Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables

Create a file named `.env` in the root directory:

```
ALLOY_TOKEN=your_token_here
ALLOY_SECRET=your_secret_here
```

> Get these from Alloy’s developer sandbox account.

### 4. Run the Backend
```bash
node index.js
```

### 5. Set Up and Run the Frontend
```bash
cd client
npm install
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testing Alloy Integration

Use the following test cases to see how Alloy responds in sandbox:

| Last Name        | Outcome          |
|------------------|------------------|
| Approved         | Approved         |
| Manual Review    | Manual Review    |
| Deny             | Denied           |

✅ These are evaluated live via Alloy’s sandbox API.

---

## 📸 Proof of API Connection

![Proof Screenshot Placeholder](./screenshots/proof.png)

See also: [Alloy_API_Integration_Proof.pdf](./Alloy_API_Integration_Proof.pdf)

This includes:

- Live API logs from Express backend
- API call to `https://sandbox.alloy.co/v1/evaluations/`
- Real outcome shown in UI from Alloy response

---

## 🔐 Security Notes

- `.env` is ignored in `.gitignore`
- Do not commit real credentials
- A `.env.example` can be added for safe sharing

---

## 📄 License

MIT — For demo and instructional purposes.



---

## 📡 API Usage and Reference

This app uses Alloy’s public sandbox API to evaluate applicant data in real time.

- The structure of the form payload (e.g., `name_first`, `birth_date`, `document_ssn`, `address`) was based on the official Alloy documentation.
- The `/v1/parameters/` endpoint was used to review valid fields and data types before finalizing the form structure.
- Applicant data is submitted via `POST` to:
  ```
  https://sandbox.alloy.co/v1/evaluations/
  ```
- Basic authentication is used with credentials stored in a `.env` file and accessed via the backend server.

These steps demonstrate conformance with Alloy’s documentation and verify live API usage.
