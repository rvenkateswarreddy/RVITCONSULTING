# RV IT Consulting Website

Next.js presentation layer for `rvit.co.in`.

## Routes

- `/`
- `/services`
- `/industries`
- `/about`
- `/careers`
- `/contactus`
- `/privacy-policy`
- `/terms-of-service`
- `/cookies`

Legacy capability URLs permanently redirect to `/services`.

## Backend

Contact and career forms call the independent Firebase Functions project at:

```text
C:\RV_IT_CONSULTING\rv_it_server
```

Configure the public endpoint when needed:

```text
NEXT_PUBLIC_FUNCTIONS_BASE_URL=https://asia-south1-rv-it-consulting.cloudfunctions.net
```

No Firebase Admin credentials or Zoho secrets belong in this project.

## Development

```powershell
npm install
npm run dev
```

Verification:

```powershell
npm run lint
npm run build
```
