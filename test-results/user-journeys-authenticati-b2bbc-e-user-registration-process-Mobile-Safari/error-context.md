# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]: Create an account
      - generic [ref=e6]: Sign up to start creating and downloading themes
    - generic [ref=e7]:
      - generic [ref=e8]:
        - generic [ref=e9]:
          - generic [ref=e10]: Email
          - textbox "Email" [ref=e11]:
            - /placeholder: you@example.com
        - generic [ref=e12]:
          - generic [ref=e13]: Password
          - textbox "Password" [ref=e14]:
            - /placeholder: ••••••••
        - generic [ref=e15]:
          - generic [ref=e16]: Confirm Password
          - textbox "Confirm Password" [ref=e17]:
            - /placeholder: ••••••••
        - button "Sign up" [ref=e18]
      - generic [ref=e19]:
        - text: Already have an account?
        - link "Sign in" [ref=e20]:
          - /url: /auth/login
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e26] [cursor=pointer]:
    - img [ref=e27]
  - alert [ref=e32]
```