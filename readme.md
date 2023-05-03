# Diagramator

More easy than diagram as code. Diagram as yaml + templates

## Requirements

- Nodejs 14 as a minimum

## Commands

It's pretty easy... You do not have a bunch of commands, just two of them:

- `npm install` – to install libraries
- `npm run dev` – start in dev mode to have `http://localhost:8080`.
- `npm run build` - optimize the scripts and create them in **dist** folder

## Run the latest version

```
npm install
npm run dev
```

Open `http://localhost:8080` and check the available diagrams

## Steps to add your own diagram

- Clone the template `https://github.com/usil/diagramator-usil-templates` or do it from the scrath following the [folder, file and name convenions](https://github.com/diagramator/diagramator.github.io/wiki/Folder-file-and-name-convenions)
- Customize the template or create a new one. After that, build and run it with `npm run build && npm run dev`
- Clone the diagramator `https://github.com/diagramator/diagramator.github.io`
- Go to `public/templates.yaml` and add your new diagram. Example if your new diagram is called **networking_vpn**:

```
- id: networking_vpn
  label: Networking Vpn
  resourcesUrl: http://localhost:3000/diagrams/networking_vpn
```
- Run the diagramator with `npm run dev`
- Open `http://localhost:8080` and check if your diagram works

![](https://i.ibb.co/P4z14hc/diagramator.gif)

If you want to share your diagram with thw world:

- run the build in the template `npm run build`
- pusht the template code
- create a git tag
- create a cdn url following this [guideline](https://github.com/diagramator/diagramator.github.io/wiki/CDN-Urls)
- open a pull request in the official portal: https://github.com/diagramator/diagramator.github.io/pulls sending the yaml with one or several diagrams

```
- id: networking_vpn
  label: Networking Vpn - By Jane
  resourcesUrl: https://cdn.jsdelivr.net/gh/jane/my-arch-diagram@v1.0.5/diagrams/networking_vpn
```
- Wait the validation and approval

## Roadmap

- cool logo
- move yaml to src
- prevent the double src load
- load the css as render.js
- unit tests
- ui/ux to be more like a yaml editor
- export to image button
- copy image to clipboard
- horizontal split pane (editor/canvas) resize <->

## Contributors

<table>
  <tbody>
    <td>
      <img src="https://avatars0.githubusercontent.com/u/3322836?s=460&v=4" width="100px;"/>
      <br />
      <label><a href="http://jrichardsz.github.io/">JRichardsz</a></label>
      <br />
    </td>    
  </tbody>
</table>
