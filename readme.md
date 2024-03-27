# Diagramator

More easy than diagram as code. Diagram as yaml + templates

## Requirements

- Nodejs 14 as a minimum

## Commands

It's pretty easy... You do not have a bunch of commands, just two of them:

- `npm install` – to install libraries
- `npm run dev` – start in dev mode to have `http://localhost:8080`.
- `npm run build` - optimize the scripts and create them in **docs** folder

## Run the latest version

```
npm install
npm run dev
```

Open `http://localhost:8080` and check the available diagrams

## Steps to add your own diagram

- Clone the template `https://github.com/usil/diagramator-usil-templates` or do it from the scrath following the [folder, file and name convenions](https://github.com/diagramator/diagramator.github.io/wiki/Folder-file-and-name-convenions)
- Customize the template or create a new one. After that, build and run it with `npm run build && npm run dev`
- Go to `public/templates.yaml` and add your new diagram. Example if your new diagram is called **networking_vpn**:

```yaml
- id: networking_vpn
  label: Networking Vpn
  resourcesUrl: http://localhost:3000/diagrams/networking_vpn
```
- Run the diagramator with `npm run dev`
- Open `http://localhost:8080?env=dev` and check if your diagram works

![](https://i.ibb.co/P4z14hc/diagramator.gif)

## Share your diagram

If you want to share your diagram with the world, follow these steps

**In your template**

- Using the issues in github, ask for a new github repository inside of the diagramator organization. Also you should explain how your diagram will help to the community (developers, sysadmin, architects, dbas, etc)
- Wait the validation and approval
- Run the build in the template `npm run build`
- Create a readme with at least a description and image of how it looks like your diagram. Check the samples
- Push the template code to the created repository
- Create a git tag
- Create a cdn url following this [guideline](https://github.com/diagramator/diagramator.github.io/wiki/CDN-Urls)

**In the diagramator**

- Update the `public/templates.yaml` with the public url of your template instead localhost
```
- id: networking_vpn
  label: Networking Vpn - By Jane
  resourcesUrl: https://cdn.jsdelivr.net/gh/jane/my-arch-diagram@v1.0.5/diagrams/networking_vpn
```
- If you made changes in the code of diagrmator, run the build in the diagrmator `npm run build`
- Open a pull request in the official portal: https://github.com/diagramator/diagramator.github.io/pulls
- Wait the validation and approval

## Roadmap

- Check the [issues page](https://github.com/diagramator/diagramator.github.io/issues)

## Regards

- Icon: https://www.flaticon.com/free-icon/diagram_554579 <a href="https://www.flaticon.com/free-icons/diagram" title="diagram icons">Diagram icons created by Freepik - Flaticon</a>

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
