# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: multiplepages.spec.ts >> file download
- Location: tests\multiplepages.spec.ts:59:5

# Error details

```
TypeError: (0 , _test.expect)(...).tobeTruty is not a function
```

# Page snapshot

```yaml
- generic [ref=f6e2]:
  - navigation [ref=f6e3]:
    - generic [ref=f6e4]:
      - generic [ref=f6e5]: 
      - text: AutoPlay
    - list [ref=f6e6]:
      - listitem [ref=f6e7]:
        - link " Home" [ref=f6e8] [cursor=pointer]:
          - /url: "#home"
          - generic [ref=f6e9]: 
          - text: Home
      - listitem [ref=f6e10]:
        - link " Forms" [ref=f6e11] [cursor=pointer]:
          - /url: "#forms"
          - generic [ref=f6e12]: 
          - text: Forms
      - listitem [ref=f6e13]:
        - link " Tables" [ref=f6e14] [cursor=pointer]:
          - /url: "#tables"
          - generic [ref=f6e15]: 
          - text: Tables
      - listitem [ref=f6e16]:
        - link " Popups" [ref=f6e17] [cursor=pointer]:
          - /url: "#popups"
          - generic [ref=f6e18]: 
          - text: Popups
      - listitem [ref=f6e19]:
        - link " Files" [ref=f6e20] [cursor=pointer]:
          - /url: "#files"
          - generic [ref=f6e21]: 
          - text: Files
      - listitem [ref=f6e22]:
        - link " Advanced" [ref=f6e23] [cursor=pointer]:
          - /url: "#advanced"
          - generic [ref=f6e24]: 
          - text: Advanced
  - generic [ref=f6e25]:
    - generic [ref=f6e26]:
      - heading " Data Entry Form" [level=3] [ref=f6e27]:
        - generic [ref=f6e28]: 
        - text: Data Entry Form
      - generic [ref=f6e29]:
        - generic [ref=f6e30]: Full name
        - textbox "Full name" [ref=f6e31]:
          - /placeholder: John Doe
          - text: John Doe
        - generic [ref=f6e32]: Email
        - textbox "Email" [ref=f6e33]:
          - /placeholder: john@example.com
          - text: john@example.com
        - generic [ref=f6e34]: Phone
        - textbox "Phone" [ref=f6e35]:
          - /placeholder: +1 234 567 890
          - text: +1 234 567 890
        - generic [ref=f6e36]: Address
        - textbox "Address" [ref=f6e37]: 123 Main St, City
        - generic [ref=f6e38]: Gender
        - generic [ref=f6e39]:
          - generic [ref=f6e40] [cursor=pointer]:
            - radio "Male" [ref=f6e41]
            - text: Male
          - generic [ref=f6e42] [cursor=pointer]:
            - radio "Female" [ref=f6e43]
            - text: Female
        - generic [ref=f6e44]: Days (checkboxes)
        - generic [ref=f6e45]:
          - checkbox "Mon" [ref=f6e46] [cursor=pointer]
          - generic [ref=f6e47] [cursor=pointer]: Mon
          - checkbox "Tue" [ref=f6e48] [cursor=pointer]
          - generic [ref=f6e49] [cursor=pointer]: Tue
          - checkbox "Wed" [ref=f6e50] [cursor=pointer]
          - generic [ref=f6e51] [cursor=pointer]: Wed
          - checkbox "Thu" [ref=f6e52] [cursor=pointer]
          - generic [ref=f6e53] [cursor=pointer]: Thu
          - checkbox "Fri" [ref=f6e54] [cursor=pointer]
          - generic [ref=f6e55] [cursor=pointer]: Fri
          - checkbox "Sat" [ref=f6e56] [cursor=pointer]
          - generic [ref=f6e57] [cursor=pointer]: Sat
          - checkbox "Sun" [ref=f6e58] [cursor=pointer]
          - generic [ref=f6e59] [cursor=pointer]: Sun
        - button " Submit" [ref=f6e60] [cursor=pointer]:
          - generic [ref=f6e61]: 
          - text: Submit
    - generic [ref=f6e62]:
      - heading " Dropdowns & more" [level=3] [ref=f6e63]:
        - generic [ref=f6e64]: 
        - text: Dropdowns & more
      - generic [ref=f6e65]: Country
      - combobox [ref=f6e66]:
        - option "India" [selected]
        - option "USA"
        - option "UK"
        - option "Germany"
        - option "France"
      - generic [ref=f6e67]: Multi-select (hold Ctrl)
      - listbox [ref=f6e68]:
        - option "Red" [ref=f6e69]
        - option "Blue" [selected] [ref=f6e70]
        - option "Green" [ref=f6e71]
        - option "Yellow" [ref=f6e72]
      - generic [ref=f6e73]: Fruit list
      - combobox [ref=f6e74]:
        - option "Apple" [selected]
        - option "Banana"
        - option "Mango"
        - option "Orange"
      - generic [ref=f6e75]: Scrollable (infinite)
      - listbox [ref=f6e76]:
        - option "Item 1" [ref=f6e77]
        - option "Item 2" [ref=f6e78]
        - option "Item 3" [ref=f6e79]
        - option "Item 4" [ref=f6e80]
        - option "Item 5" [ref=f6e81]
        - option "Item 6" [ref=f6e82]
        - option "Item 7" [ref=f6e83]
        - option "Item 8" [ref=f6e84]
        - option "Item 9" [ref=f6e85]
        - option "Item 10" [ref=f6e86]
        - option "Item 11" [ref=f6e87]
        - option "Item 12" [ref=f6e88]
        - option "Item 13" [ref=f6e89]
        - option "Item 14" [ref=f6e90]
        - option "Item 15" [ref=f6e91]
        - option "Item 16" [ref=f6e92]
        - option "Item 17" [ref=f6e93]
        - option "Item 18" [ref=f6e94]
        - option "Item 19" [ref=f6e95]
        - option "Item 20" [ref=f6e96]
  - generic [ref=f6e97]:
    - generic [ref=f6e98]:
      - heading " Date Picker (with navigation)" [level=3] [ref=f6e99]:
        - generic [ref=f6e100]: 
        - text: Date Picker (with navigation)
      - generic [ref=f6e101]: Select the date
      - textbox "mm/dd/yyyy" [ref=f6e102]
    - generic [ref=f6e103]:
      - heading " Date Picker (with select)" [level=3] [ref=f6e104]:
        - generic [ref=f6e105]: 
        - text: Date Picker (with select)
      - generic [ref=f6e106]: Select the date
      - textbox "dd/mm/yyyy" [ref=f6e107]
    - generic [ref=f6e108]:
      - heading " Date Range Selector" [level=3] [ref=f6e109]:
        - generic [ref=f6e110]: 
        - text: Date Range Selector
      - generic [ref=f6e111]:
        - textbox [ref=f6e112]:
          - /placeholder: Start Date
        - generic [ref=f6e113]: to
        - textbox [ref=f6e114]:
          - /placeholder: End Date
      - button " Submit" [ref=f6e115] [cursor=pointer]:
        - generic [ref=f6e116]: 
        - text: Submit
  - generic [ref=f6e117]:
    - heading " Static Web Table" [level=3] [ref=f6e118]:
      - generic [ref=f6e119]: 
      - text: Static Web Table
    - table [ref=f6e120]:
      - rowgroup [ref=f6e121]:
        - row [ref=f6e122]:
          - columnheader "Product Name" [ref=f6e123]
          - columnheader "Category" [ref=f6e124]
          - columnheader "Price" [ref=f6e125]
          - columnheader "Stock" [ref=f6e126]
          - columnheader "Status" [ref=f6e127]
      - rowgroup [ref=f6e128]:
        - row [ref=f6e129]:
          - cell "Laptop" [ref=f6e130]
          - cell "Electronics" [ref=f6e131]
          - cell "$999" [ref=f6e132]
          - cell "15" [ref=f6e133]
          - cell "In Stock" [ref=f6e134]
        - row [ref=f6e135]:
          - cell "Mouse" [ref=f6e136]
          - cell "Electronics" [ref=f6e137]
          - cell "$29" [ref=f6e138]
          - cell "50" [ref=f6e139]
          - cell "In Stock" [ref=f6e140]
        - row [ref=f6e141]:
          - cell "Keyboard" [ref=f6e142]
          - cell "Electronics" [ref=f6e143]
          - cell "$79" [ref=f6e144]
          - cell "0" [ref=f6e145]
          - cell "Out of Stock" [ref=f6e146]
        - row [ref=f6e147]:
          - cell "Monitor" [ref=f6e148]
          - cell "Electronics" [ref=f6e149]
          - cell "$349" [ref=f6e150]
          - cell "8" [ref=f6e151]
          - cell "In Stock" [ref=f6e152]
  - generic [ref=f6e153]:
    - heading " Web Table with CRUD" [level=3] [ref=f6e154]:
      - generic [ref=f6e155]: 
      - text: Web Table with CRUD
    - table [ref=f6e156]:
      - rowgroup [ref=f6e157]:
        - row [ref=f6e158]:
          - columnheader "#" [ref=f6e159]
          - columnheader "Name" [ref=f6e160]
          - columnheader "Role" [ref=f6e161]
          - columnheader "Action" [ref=f6e162]
      - rowgroup [ref=f6e163]:
        - row [ref=f6e164]:
          - cell "1" [ref=f6e165]
          - cell "Alice" [ref=f6e166]
          - cell "Engineer" [ref=f6e167]
          - cell [ref=f6e168]:
            - button "Delete" [ref=f6e169] [cursor=pointer]
        - row [ref=f6e170]:
          - cell "2" [ref=f6e171]
          - cell "Bob" [ref=f6e172]
          - cell "Designer" [ref=f6e173]
          - cell [ref=f6e174]:
            - button "Delete" [ref=f6e175] [cursor=pointer]
    - generic [ref=f6e176]:
      - textbox "Name" [ref=f6e177]
      - textbox "Role" [ref=f6e178]
      - button "+ Add" [ref=f6e179] [cursor=pointer]:
        - generic [ref=f6e180]: +
        - text: Add
      - button "+ Dynamic" [ref=f6e181] [cursor=pointer]
    - textbox "Search table..." [ref=f6e183]
  - generic [ref=f6e184]:
    - heading " Dynamic System Processes Table" [level=3] [ref=f6e185]:
      - generic [ref=f6e186]: 
      - text: Dynamic System Processes Table
    - table [ref=f6e187]:
      - rowgroup [ref=f6e188]:
        - row [ref=f6e189]:
          - columnheader "Name" [ref=f6e190]
          - columnheader "Memory (MB)" [ref=f6e191]
          - columnheader "Network (Mbps)" [ref=f6e192]
          - columnheader "CPU (%)" [ref=f6e193]
          - columnheader "Disk (MB/s)" [ref=f6e194]
      - rowgroup [ref=f6e195]:
        - row [ref=f6e196]:
          - cell "System" [ref=f6e197]
          - cell "77.4 MB" [ref=f6e198]
          - cell "9.8 Mbps" [ref=f6e199]
          - cell "1.0%" [ref=f6e200]
          - cell "0.31 MB/s" [ref=f6e201]
        - row [ref=f6e202]:
          - cell "Internet Explorer" [ref=f6e203]
          - cell "51.7 MB" [ref=f6e204]
          - cell "3.9 Mbps" [ref=f6e205]
          - cell "5.4%" [ref=f6e206]
          - cell "0.84 MB/s" [ref=f6e207]
        - row [ref=f6e208]:
          - cell "Firefox" [ref=f6e209]
          - cell "69.2 MB" [ref=f6e210]
          - cell "5.8 Mbps" [ref=f6e211]
          - cell "4.8%" [ref=f6e212]
          - cell "0.06 MB/s" [ref=f6e213]
        - row [ref=f6e214]:
          - cell "Chrome" [ref=f6e215]
          - cell "81.8 MB" [ref=f6e216]
          - cell "5.2 Mbps" [ref=f6e217]
          - cell "1.4%" [ref=f6e218]
          - cell "0.69 MB/s" [ref=f6e219]
    - generic [ref=f6e220]:
      - paragraph [ref=f6e221]:
        - text: "CPU load of Chrome process:"
        - strong [ref=f6e222]: 1.4%
        - text: "Memory Size of Firefox process:"
        - strong [ref=f6e223]: 69.2 MB
      - paragraph [ref=f6e224]:
        - text: "Network speed of Chrome process:"
        - strong [ref=f6e225]: 5.2 Mbps
        - text: "Disk space of Firefox process:"
        - strong [ref=f6e226]: 0.06 MB/s
  - generic [ref=f6e227]:
    - generic [ref=f6e228]:
      - heading " Alerts" [level=3] [ref=f6e229]:
        - generic [ref=f6e230]: 
        - text: Alerts
      - button "Simple" [ref=f6e231] [cursor=pointer]
      - button "Confirm" [ref=f6e232] [cursor=pointer]
      - button "Prompt" [ref=f6e233] [cursor=pointer]
    - generic [ref=f6e234]:
      - heading " Popups" [level=3] [ref=f6e235]:
        - generic [ref=f6e236]: 
        - text: Popups
      - button "Popup" [ref=f6e237] [cursor=pointer]
      - button "New Tab" [ref=f6e238] [cursor=pointer]
      - button "New Window" [ref=f6e239] [cursor=pointer]
    - generic [ref=f6e240]:
      - heading " Toggle Button" [level=3] [ref=f6e241]:
        - generic [ref=f6e242]: 
        - text: Toggle Button
      - button "Start" [ref=f6e243] [cursor=pointer]
      - button "Right Click Me" [ref=f6e244] [cursor=pointer]
  - generic [ref=f6e245]:
    - generic [ref=f6e246]:
      - heading " File Upload" [level=3] [ref=f6e247]:
        - generic [ref=f6e248]: 
        - text: File Upload
      - generic [ref=f6e249]:
        - generic [ref=f6e250]: Single
        - generic [ref=f6e251]:
          - button "Choose File" [ref=f6e252]
          - button "Upload Single File" [ref=f6e253] [cursor=pointer]
        - paragraph
      - generic [ref=f6e254]:
        - generic [ref=f6e255]: Multiple
        - generic [ref=f6e256]:
          - button "Choose File" [ref=f6e257]
          - button "Upload Multiple Files" [ref=f6e258] [cursor=pointer]
        - paragraph
    - generic [ref=f6e259]:
      - heading " File Download" [level=3] [ref=f6e260]:
        - generic [ref=f6e261]: 
        - text: File Download
      - button " Download File" [active] [ref=f6e262] [cursor=pointer]:
        - generic [ref=f6e263]: 
        - text: Download File
      - button "Open PDF" [ref=f6e264] [cursor=pointer]
  - generic [ref=f6e265]:
    - generic [ref=f6e266]:
      - heading " Interactive Tooltip" [level=3] [ref=f6e267]:
        - generic [ref=f6e268]: 
        - text: Interactive Tooltip
      - text: Hover me
    - generic [ref=f6e269]:
      - heading " Shadow DOM" [level=3] [ref=f6e270]:
        - generic [ref=f6e271]: 
        - text: Shadow DOM
      - generic [ref=f6e272]:
        - generic [ref=f6e273]: Mobiles
        - generic [ref=f6e274]: Laptops
        - link "Blog" [ref=f6e277] [cursor=pointer]:
          - /url: https://www.pavantestingtools.com/
        - textbox [ref=f6e278]
        - checkbox [ref=f6e279]
        - button "Choose File" [ref=f6e280]
      - link "Youtube" [ref=f6e281] [cursor=pointer]:
        - /url: https://www.youtube.com/@sdetpavan/videos
    - generic [ref=f6e282]:
      - heading " SVG Elements" [level=3] [ref=f6e283]:
        - generic [ref=f6e284]: 
        - text: SVG Elements
      - generic [ref=f6e285]:
        - paragraph [ref=f6e287]: Basic Shapes
        - generic [ref=f6e293]:
          - paragraph [ref=f6e294]: Bar Chart
          - img [ref=f6e295]:
            - generic [ref=f6e301]: A
            - generic [ref=f6e302]: B
            - generic [ref=f6e303]: C
            - generic [ref=f6e304]: D
            - generic [ref=f6e305]: E
  - generic [ref=f6e306]:
    - generic [ref=f6e307]:
      - heading " Hover & Double Click" [level=3] [ref=f6e308]:
        - generic [ref=f6e309]: 
        - text: Hover & Double Click
      - button "Hover me" [ref=f6e310] [cursor=pointer]
      - button "Double click" [ref=f6e311] [cursor=pointer]
      - generic [ref=f6e312]:
        - generic [ref=f6e313]: Field1
        - textbox [ref=f6e314]: Hello World!
        - generic [ref=f6e315]: Field2
        - textbox [ref=f6e316]
        - button "Copy Text" [ref=f6e317] [cursor=pointer]
        - paragraph [ref=f6e318]: Double‑click button to copy Field1 → Field2
    - generic [ref=f6e319]:
      - heading " Drag & Drop Interaction" [level=3] [ref=f6e320]:
        - generic [ref=f6e321]: 
        - text: Drag & Drop Interaction
      - generic [ref=f6e322]:
        - generic [ref=f6e323]: Drag me
        - generic [ref=f6e324]: Drop zone
    - generic [ref=f6e325]:
      - heading " Range Slider" [level=3] [ref=f6e326]:
        - generic [ref=f6e327]: 
        - text: Range Slider
      - generic [ref=f6e328]:
        - slider [ref=f6e329]: "50"
        - generic [ref=f6e330]: "50"
      - generic [ref=f6e331]:
        - paragraph [ref=f6e332]:
          - generic [ref=f6e333]: "Price range:"
          - textbox "Price range:" [ref=f6e334]: $75 - $300
        - generic [ref=f6e335]:
          - generic [ref=f6e337] [cursor=pointer]
          - generic [ref=f6e338] [cursor=pointer]
  - generic [ref=f6e339]:
    - generic [ref=f6e340]:
      - heading " Nested frames" [level=3] [ref=f6e341]:
        - generic [ref=f6e342]: 
        - text: Nested frames
      - iframe [ref=f6e343]:
        - generic [ref=f7e1]:
          - heading "Outer frame" [level=4] [ref=f7e2]
          - iframe [ref=f7e3]:
            - generic [ref=f9e2]:
              - generic [ref=f9e3]: Inner input
              - textbox "Inner input" [ref=f9e4]:
                - /placeholder: Type_here
    - generic [ref=f6e344]:
      - heading " iframe (external)" [level=3] [ref=f6e345]:
        - generic [ref=f6e346]: 
        - text: iframe (external)
      - iframe [ref=f6e347]:
        - generic [ref=f8e2]:
          - region "Skip to main content":
            - link "Skip to main content" [ref=f8e3] [cursor=pointer]:
              - /url: "#__docusaurus_skipToContent_fallback"
          - navigation "Main" [ref=f8e4]:
            - generic [ref=f8e5]:
              - generic [ref=f8e6]:
                - button "Toggle navigation bar" [ref=f8e7] [cursor=pointer]
                - link "Playwright logo Playwright" [ref=f8e10] [cursor=pointer]:
                  - /url: /
                  - img "Playwright logo" [ref=f8e12]
                  - generic [ref=f8e13]: Playwright
              - button "Search (Control+k)" [ref=f8e15] [cursor=pointer]
          - generic [ref=f8e20]:
            - banner [ref=f8e21]:
              - generic [ref=f8e22]:
                - heading "Playwright enables reliable web automation for testing, scripting, and AI agents." [level=1] [ref=f8e23]
                - paragraph [ref=f8e24]:
                  - text: One API to drive Chromium, Firefox, and WebKit — in your tests, your scripts, and your agent workflows. Available for
                  - link "TypeScript" [ref=f8e25] [cursor=pointer]:
                    - /url: https://playwright.dev/docs/intro
                  - text: ","
                  - link "Python" [ref=f8e26] [cursor=pointer]:
                    - /url: https://playwright.dev/python/docs/intro
                  - text: ","
                  - link ".NET" [ref=f8e27] [cursor=pointer]:
                    - /url: https://playwright.dev/dotnet/docs/intro
                  - text: ", and"
                  - link "Java" [ref=f8e28] [cursor=pointer]:
                    - /url: https://playwright.dev/java/docs/intro
                  - text: .
                - generic [ref=f8e29]:
                  - link "Get started" [ref=f8e30] [cursor=pointer]:
                    - /url: /docs/intro
                  - generic [ref=f8e31]:
                    - link "Star microsoft/playwright on GitHub" [ref=f8e32] [cursor=pointer]:
                      - /url: https://github.com/microsoft/playwright
                      - text: Star
                    - link "99k+ stargazers on GitHub" [ref=f8e34] [cursor=pointer]:
                      - /url: https://github.com/microsoft/playwright/stargazers
                      - text: 99k+
            - main [ref=f8e35]:
              - generic [ref=f8e38]:
                - generic [ref=f8e39]:
                  - heading "Playwright Test" [level=3] [ref=f8e40]
                  - paragraph [ref=f8e41]: Full-featured test runner with auto-waiting, assertions, tracing, and parallelism across Chromium, Firefox, and WebKit.
                  - code [ref=f8e42]: npm init playwright@latest
                  - link "Testing documentation" [ref=f8e44] [cursor=pointer]:
                    - /url: /docs/intro
                - generic [ref=f8e45]:
                  - heading "Playwright CLI" [level=3] [ref=f8e46]
                  - paragraph [ref=f8e47]: Token-efficient browser automation for coding agents like Claude Code and GitHub Copilot. Skill-based workflows without large context overhead.
                  - code [ref=f8e48]: npm i -g @playwright/cli@latest
                  - link "CLI documentation" [ref=f8e50] [cursor=pointer]:
                    - /url: /docs/getting-started-cli
                - generic [ref=f8e51]:
                  - heading "Playwright MCP" [level=3] [ref=f8e52]
                  - paragraph [ref=f8e53]: Model Context Protocol server that gives AI agents full browser control through structured accessibility snapshots.
                  - code [ref=f8e54]: npx @playwright/mcp@latest
                  - link "MCP documentation" [ref=f8e56] [cursor=pointer]:
                    - /url: /docs/getting-started-mcp
              - generic [ref=f8e58]:
                - heading "Built for testing" [level=2] [ref=f8e59]
                - generic [ref=f8e61]:
                  - generic [ref=f8e62]:
                    - heading "Auto-wait and web-first assertions" [level=4] [ref=f8e63]
                    - paragraph [ref=f8e64]: Playwright waits for elements to be actionable before performing actions. Assertions automatically retry until conditions are met. No artificial timeouts, no flaky tests.
                    - heading "Test isolation" [level=4] [ref=f8e65]
                    - paragraph [ref=f8e66]: Each test gets a fresh browser context — equivalent to a brand new browser profile. Full isolation with near-zero overhead. Save authentication state once and reuse it across tests.
                  - generic [ref=f8e67]:
                    - heading "Resilient locators" [level=4] [ref=f8e68]
                    - paragraph [ref=f8e69]:
                      - text: "Find elements with selectors that mirror how users see the page:"
                      - code [ref=f8e70]: getByRole
                      - text: ","
                      - code [ref=f8e71]: getByLabel
                      - text: ","
                      - code [ref=f8e72]: getByPlaceholder
                      - text: ","
                      - code [ref=f8e73]: getByTestId
                      - text: . No brittle CSS paths.
                    - heading "Parallelism and sharding" [level=4] [ref=f8e74]
                    - paragraph [ref=f8e75]: Tests run in parallel by default across all configured browsers. Shard across multiple machines for faster CI. Full cross-browser coverage on every commit.
              - generic [ref=f8e77]:
                - heading "Built for AI agents" [level=2] [ref=f8e78]
                - generic [ref=f8e80]:
                  - generic [ref=f8e81]:
                    - heading "Accessibility snapshots, not screenshots" [level=4] [ref=f8e82]
                    - paragraph [ref=f8e83]: Agents interact with pages through structured accessibility trees — element roles, names, and refs. Deterministic and unambiguous, no vision models required.
                    - heading "MCP server" [level=4] [ref=f8e84]
                    - paragraph [ref=f8e85]:
                      - text: Drop-in
                      - link "Model Context Protocol" [ref=f8e86] [cursor=pointer]:
                        - /url: https://modelcontextprotocol.io
                      - text: server for VS Code, Cursor, Claude Desktop, Windsurf, and any MCP client. Full browser control through standard tool calls.
                  - generic [ref=f8e87]:
                    - heading "CLI for coding agents" [level=4] [ref=f8e88]
                    - paragraph [ref=f8e89]: Token-efficient command-line interface with installable skills. Purpose-built for Claude Code, GitHub Copilot, and similar coding agents that need to balance browser automation with large codebases.
                    - heading "Session monitoring" [level=4] [ref=f8e90]
                    - paragraph [ref=f8e91]: Visual dashboard with live screencast previews of all running browser sessions. Click any session to zoom in and take control.
              - generic [ref=f8e93]:
                - heading "Powerful tooling" [level=2] [ref=f8e94]
                - generic [ref=f8e96]:
                  - generic [ref=f8e97]:
                    - heading [level=4] [ref=f8e98]:
                      - link "Test generator" [ref=f8e99] [cursor=pointer]:
                        - /url: docs/codegen
                    - paragraph [ref=f8e100]: Record your actions in the browser and Playwright writes the test code. Generate assertions from the recording toolbar. Pick locators by clicking on elements.
                  - generic [ref=f8e101]:
                    - heading [level=4] [ref=f8e102]:
                      - link "Trace Viewer" [ref=f8e103] [cursor=pointer]:
                        - /url: docs/trace-viewer-intro
                    - paragraph [ref=f8e104]: Full timeline of test execution with DOM snapshots, network requests, console logs, and screenshots at every step. Investigate failures without re-running.
                  - generic [ref=f8e105]:
                    - heading [level=4] [ref=f8e106]:
                      - link "VS Code extension" [ref=f8e107] [cursor=pointer]:
                        - /url: docs/getting-started-vscode
                    - paragraph [ref=f8e108]: Run, debug, and generate tests directly in the editor. Set breakpoints, live-inspect locators in the browser, and view full execution traces in the sidebar.
              - generic [ref=f8e110]:
                - img "Chromium, Firefox, WebKit" [ref=f8e111]
                - paragraph [ref=f8e112]:
                  - text: Any browser. Any platform. Chromium, Firefox, and WebKit on Linux, macOS, and Windows. Headless and headed. Also available for
                  - link "Python" [ref=f8e113] [cursor=pointer]:
                    - /url: https://playwright.dev/python/docs/intro
                  - text: ","
                  - link ".NET" [ref=f8e114] [cursor=pointer]:
                    - /url: https://playwright.dev/dotnet/docs/intro
                  - text: ", and"
                  - link "Java" [ref=f8e115] [cursor=pointer]:
                    - /url: https://playwright.dev/java/docs/intro
                  - text: .
              - generic [ref=f8e119]:
                - heading "Chosen by companies and open source projects" [level=2] [ref=f8e120]
                - list [ref=f8e121]:
                  - listitem [ref=f8e122]:
                    - link [ref=f8e123] [cursor=pointer]:
                      - /url: https://code.visualstudio.com
                      - img "VS Code" [ref=f8e124]
                  - listitem [ref=f8e125]:
                    - link [ref=f8e126] [cursor=pointer]:
                      - /url: https://bing.com
                      - img "Bing" [ref=f8e127]
                  - listitem [ref=f8e128]:
                    - link [ref=f8e129] [cursor=pointer]:
                      - /url: https://outlook.com
                      - img "Outlook" [ref=f8e130]
                  - listitem [ref=f8e131]:
                    - link [ref=f8e132] [cursor=pointer]:
                      - /url: https://www.hotstar.com/
                      - img "Disney+ Hotstar" [ref=f8e133]
                  - listitem [ref=f8e134]:
                    - link [ref=f8e135] [cursor=pointer]:
                      - /url: https://github.com/mui-org/material-ui
                      - img "Material UI" [ref=f8e136]
                  - listitem [ref=f8e137]:
                    - link [ref=f8e138] [cursor=pointer]:
                      - /url: https://github.com/ing-bank/lion
                      - img "ING" [ref=f8e139]
                  - listitem [ref=f8e140]:
                    - link [ref=f8e141] [cursor=pointer]:
                      - /url: https://github.com/adobe/spectrum-web-components
                      - img "Adobe" [ref=f8e142]
                  - listitem [ref=f8e143]:
                    - link [ref=f8e144] [cursor=pointer]:
                      - /url: https://github.com/react-navigation/react-navigation
                      - img "React Navigation" [ref=f8e145]
                  - listitem [ref=f8e146]:
                    - link [ref=f8e147] [cursor=pointer]:
                      - /url: https://accessibilityinsights.io/
                      - img "Accessibility Insights" [ref=f8e148]
          - contentinfo [ref=f8e149]:
            - generic [ref=f8e150]:
              - generic [ref=f8e151]:
                - generic [ref=f8e152]:
                  - generic [ref=f8e153]: Learn
                  - list [ref=f8e154]:
                    - listitem [ref=f8e155]:
                      - link "Getting started" [ref=f8e156] [cursor=pointer]:
                        - /url: /docs/intro
                    - listitem [ref=f8e157]:
                      - link [ref=f8e158] [cursor=pointer]:
                        - /url: https://learn.microsoft.com/en-us/training/modules/build-with-playwright/
                        - text: Playwright Training
                        - img "(opens in new tab)" [ref=f8e159]
                    - listitem [ref=f8e161]:
                      - link "Learn Videos" [ref=f8e162] [cursor=pointer]:
                        - /url: /community/learn-videos
                    - listitem [ref=f8e163]:
                      - link "Feature Videos" [ref=f8e164] [cursor=pointer]:
                        - /url: /community/feature-videos
                - generic [ref=f8e165]:
                  - generic [ref=f8e166]: Community
                  - list [ref=f8e167]:
                    - listitem [ref=f8e168]:
                      - link [ref=f8e169] [cursor=pointer]:
                        - /url: https://stackoverflow.com/questions/tagged/playwright
                        - text: Stack Overflow
                        - img "(opens in new tab)" [ref=f8e170]
                    - listitem [ref=f8e172]:
                      - link [ref=f8e173] [cursor=pointer]:
                        - /url: https://aka.ms/playwright/discord
                        - text: Discord
                        - img "(opens in new tab)" [ref=f8e174]
                    - listitem [ref=f8e176]:
                      - link [ref=f8e177] [cursor=pointer]:
                        - /url: https://x.com/playwrightweb
                        - text: X
                        - img "(opens in new tab)" [ref=f8e178]
                    - listitem [ref=f8e180]:
                      - link [ref=f8e181] [cursor=pointer]:
                        - /url: https://www.linkedin.com/company/playwrightweb
                        - text: LinkedIn
                        - img "(opens in new tab)" [ref=f8e182]
                - generic [ref=f8e184]:
                  - generic [ref=f8e185]: More
                  - list [ref=f8e186]:
                    - listitem [ref=f8e187]:
                      - link [ref=f8e188] [cursor=pointer]:
                        - /url: https://github.com/microsoft/playwright
                        - text: GitHub
                        - img "(opens in new tab)" [ref=f8e189]
                    - listitem [ref=f8e191]:
                      - link [ref=f8e192] [cursor=pointer]:
                        - /url: https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg
                        - text: YouTube
                        - img "(opens in new tab)" [ref=f8e193]
                    - listitem [ref=f8e195]:
                      - link [ref=f8e196] [cursor=pointer]:
                        - /url: https://dev.to/playwright
                        - text: Blog
                        - img "(opens in new tab)" [ref=f8e197]
                    - listitem [ref=f8e199]:
                      - link "Ambassadors" [ref=f8e200] [cursor=pointer]:
                        - /url: /community/ambassadors
                    - listitem [ref=f8e201]:
                      - link [ref=f8e202] [cursor=pointer]:
                        - /url: https://go.microsoft.com/fwlink/?LinkId=521839
                        - text: Microsoft Privacy Statement
                        - img "(opens in new tab)" [ref=f8e203]
              - generic [ref=f8e205]: Copyright © 2026 Microsoft
  - separator [ref=f6e348]
  - generic [ref=f6e349]:
    - text: Automation Playground
    - link "@SDET-QA By Pavan" [ref=f6e350] [cursor=pointer]:
      - /url: https://www.youtube.com/@sdetpavan
```

# Test source

```ts
  1  | import {test , expect} from '@playwright/test'
  2  | 
  3  | import fs from 'fs';
  4  | 
  5  | test("multiple file handle ",async({browser})=>{
  6  | 
  7  | const context1= await browser.newContext();
  8  | const page=await context1.newPage();
  9  | 
  10 | await page.goto('https://sdetqa.vercel.app/autoplay')
  11 | 
  12 | const text=page.getByText('AutoPlay')
  13 | await expect(text).toContainText('AutoPlay');
  14 | 
  15 | 
  16 | const [newtab]=await Promise.all(
  17 | 
  18 |     [
  19 |         context1.waitForEvent('page') ,
  20 |         
  21 |      page.getByRole('button',{name:'New Tab',exact:true}).click()
  22 | 
  23 |     ]
  24 | )
  25 | await  newtab.waitForURL('https://playwright.dev/')
  26 | 
  27 | await newtab.waitForLoadState('load');
  28 | 
  29 | const textdata= newtab.getByText('Playwright CLI',{exact:true})
  30 | 
  31 | await newtab.waitForTimeout(5000)
  32 | 
  33 | })
  34 | 
  35 | test("file uplaod ", async({page})=>{
  36 | 
  37 | await page.goto('https://sdetqa.vercel.app/autoplay')
  38 | 
  39 | 
  40 | const fileupload=page.locator('#singleFileInput')
  41 | 
  42 | const fileuplaodbutton=page.getByText('Upload Single File')
  43 | 
  44 | await fileupload.setInputFiles(['FileUpload/Framework-Step-By-Step.pdf']);
  45 | 
  46 | await page.waitForTimeout(5000);
  47 | 
  48 | await fileuplaodbutton.click();
  49 | 
  50 | 
  51 | const message=page.locator('#singleFileStatus');
  52 | await message.waitFor({state:'visible'});
  53 | await expect(message).toContainText('Single file selected');
  54 | //await page.waitForTimeout(5000);
  55 | 
  56 | })
  57 | 
  58 | 
  59 | test("file download",async ({page})=>{
  60 | 
  61 | await page.goto('https://sdetqa.vercel.app/autoplay');
  62 | 
  63 | const [downloadfile]= await Promise.all(
  64 | [
  65 | page.waitForEvent('download'),
  66 | page.getByRole('button',{name:' Download File'}).click()
  67 | 
  68 |  ]
  69 | )
  70 | 
  71 | const stringdata=downloadfile.suggestedFilename();
  72 | console.log(stringdata);
  73 | 
  74 | await downloadfile.saveAs(`download/${downloadfile.suggestedFilename()}`);
  75 | const downloadpath=`download/${downloadfile.suggestedFilename()}`;
  76 | 
  77 | 
  78 | const fileExists=fs.existsSync(downloadpath);
> 79 |  expect(fileExists).tobeTruty();
     |                     ^ TypeError: (0 , _test.expect)(...).tobeTruty is not a function
  80 | 
  81 | 
  82 | })
```