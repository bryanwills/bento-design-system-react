import { IllustrationProps } from "./IllustrationProps";
import { svgIllustrationProps } from "./svgIllustrationProps";

export function IllustrationMap(props: IllustrationProps) {
  const variants = {
    color: (
      <>
        <path
          d="m75.25 63.428-22.288 8.75-25.212-10-22.5 7.5v-52.5l22.462-7.5 26.076 10 21.462-8.75v52.5Z"
          fill="#FAEFDE"
        />
        <path d="M52.538 19.678 27.75 9.691v52.487l25.212 10-.425-52.5Z" fill="#FFF7F0" />
        <path d="m52.538 19.678.425 52.5 22.287-8.75v-52.5l-22.712 8.75Z" fill="#EFD8BE" />
        <path
          d="m53.788 25.928-26.075-10-17.463 5.825v40.013l17.5-5.838 25.212 10 17.288-6.787V19.216l-16.462 6.712Z"
          fill="#C5E4FA"
        />
        <path d="M52.538 25.928 27.75 15.941v39.987l25.212 10-.425-40Z" fill="#E3F2FF" />
        <path d="m70.25 19.103-17.712 6.825.425 40 17.287-6.787V19.103Z" fill="#C5E4FA" />
        <path d="M52.75 7.178a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" fill="#ED7899" />
        <path
          d="M75.412 10.69a2.501 2.501 0 0 0-2.312-.262l-9.525 3.75a11.25 11.25 0 0 0-21.613-.112l-12.9-5.213a3.75 3.75 0 0 0-2.562-.075l-19.938 6.65A3.75 3.75 0 0 0 4 18.978v48.963a2.5 2.5 0 0 0 3.287 2.375l20-6.663a1.25 1.25 0 0 1 .863 0l23.225 9.325a3.75 3.75 0 0 0 2.75 0l20-7.775a3.75 3.75 0 0 0 2.375-3.487V12.753a2.5 2.5 0 0 0-1.088-2.062ZM51.5 28.354v21.325a1.25 1.25 0 0 0 2.5 0V28.353a11.249 11.249 0 0 0 7.888-4.637L69 20.928v37.338l-16.25 6.312-24.113-9.637a2.5 2.5 0 0 0-.925-.175c-.267 0-.533.041-.787.125L11.5 60.028V22.666l16.25-5.4 15.8 6.325a11.25 11.25 0 0 0 7.95 4.762Zm1.25-19.925a8.75 8.75 0 1 1 0 17.5 8.75 8.75 0 0 1 0-17.5ZM74 61.716a1.25 1.25 0 0 1-.8 1.162l-20 7.775a1.25 1.25 0 0 1-.913 0l-23.224-9.3a3.75 3.75 0 0 0-2.563-.075l-20 6.663V18.978a1.25 1.25 0 0 1 .85-1.187l19.925-6.638a1.25 1.25 0 0 1 .863 0L41.5 16.541v.637c.003 1.04.15 2.075.438 3.075l-13.3-5.312a2.5 2.5 0 0 0-1.713 0l-16.25 5.4A2.5 2.5 0 0 0 9 22.666v37.362a2.5 2.5 0 0 0 3.287 2.375l15.463-5.15 24.112 9.65a2.5 2.5 0 0 0 1.838 0l16.25-6.312a2.5 2.5 0 0 0 1.55-2.325V20.928a2.5 2.5 0 0 0-3.4-2.325l-4.575 1.775c.312-1.038.472-2.116.475-3.2v-.525l10-3.9v48.963Z"
          fill="#8D6C9F"
        />
        <path
          d="M52.75 13.428a3.75 3.75 0 0 1 2.4.875 1.252 1.252 0 0 0 1.613-1.912 6.25 6.25 0 0 0-4.013-1.463 1.25 1.25 0 0 0 0 2.5Zm-31.25 27.5a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5a1.25 1.25 0 0 0-1.25-1.25Zm5 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5a1.25 1.25 0 0 0-2.5 0Zm7.5 3.75a1.25 1.25 0 0 0 1.25-1.25v-2.5a1.25 1.25 0 0 0-2.5 0v2.5a1.25 1.25 0 0 0 1.25 1.25Zm6.25 0a1.25 1.25 0 0 0 1.25-1.25v-2.5a1.25 1.25 0 0 0-2.5 0v2.5a1.25 1.25 0 0 0 1.25 1.25Zm6.25 0a1.25 1.25 0 0 0 1.25-1.25v-2.5a1.25 1.25 0 0 0-2.5 0v2.5a1.25 1.25 0 0 0 1.25 1.25Zm12.5 0a1.25 1.25 0 0 0 1.25-1.25v-2.5a1.25 1.25 0 0 0-2.5 0v2.5a1.25 1.25 0 0 0 1.25 1.25Zm6.25 0a1.25 1.25 0 0 0 1.25-1.25v-2.5a1.25 1.25 0 0 0-2.5 0v2.5a1.25 1.25 0 0 0 1.25 1.25Zm-50-5a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5a1.25 1.25 0 0 0-1.25-1.25Z"
          fill="#8D6C9F"
        />
      </>
    ),
    outline: (
      <path d="M52.75 6c-5.107 0-9.419 3.423-10.791 8.086L29.063 8.93a3.746 3.746 0 0 0-2.578-.078l-19.922 6.64A3.75 3.75 0 0 0 4 19.052v48.96c0 .805.386 1.562 1.035 2.031.65.469 1.494.6 2.256.347l19.985-6.665a1.24 1.24 0 0 1 .86.029l23.232 9.292a3.736 3.736 0 0 0 2.754.01l19.985-7.774a3.717 3.717 0 0 0 2.393-3.491V12.826c0-.82-.405-1.597-1.089-2.06a2.49 2.49 0 0 0-2.314-.264l-9.527 3.701C62.232 9.477 57.897 6 52.75 6Zm0 2.5c4.824 0 8.75 3.926 8.75 8.75S57.574 26 52.75 26 44 22.074 44 17.25s3.926-8.75 8.75-8.75Zm0 2.5c-.693 0-1.25.557-1.25 1.25s.557 1.25 1.25 1.25a3.76 3.76 0 0 1 2.407.874 1.248 1.248 0 0 0 1.763-.156 1.253 1.253 0 0 0-.156-1.763A6.276 6.276 0 0 0 52.75 11Zm-25.044.166c.146 0 .293.03.43.088l13.398 5.356c-.014.21-.034.425-.034.64 0 1.07.161 2.1.44 3.081L28.639 15.01a2.479 2.479 0 0 0-1.72-.049l-16.21 5.4A2.505 2.505 0 0 0 9 22.738v37.364c0 .8.39 1.557 1.035 2.026a2.512 2.512 0 0 0 2.256.342l15.42-5.142 24.121 9.649c.298.122.61.18.928.18.307 0 .61-.058.903-.17l16.24-6.319a2.48 2.48 0 0 0 1.597-2.33V21.02c0-.825-.405-1.596-1.089-2.06a2.49 2.49 0 0 0-2.314-.264l-4.57 1.773c.302-1.02.473-2.1.473-3.218 0-.176-.02-.352-.024-.527L74 12.826v48.965c0 .513-.322.977-.8 1.162l-19.981 7.774a1.242 1.242 0 0 1-.918 0L29.063 61.43a3.694 3.694 0 0 0-1.391-.269c-.4 0-.8.064-1.187.19L6.5 68.012v-48.96c0-.536.342-1.015.854-1.186l19.922-6.64c.137-.044.284-.064.43-.059Zm.005 6.162 15.8 6.323a11.242 11.242 0 0 0 7.989 4.776V49.75c0 .693.557 1.25 1.25 1.25S54 50.443 54 49.75V28.427c3.247-.362 6.074-2.114 7.89-4.639L69 21.02v37.319l-16.245 6.318-24.116-9.648a2.53 2.53 0 0 0-.928-.18c-.269 0-.537.043-.791.131L11.5 60.102V22.733l16.21-5.405ZM15.25 41c-.693 0-1.25.557-1.25 1.25v2.5c0 .693.557 1.25 1.25 1.25s1.25-.557 1.25-1.25v-2.5c0-.693-.557-1.25-1.25-1.25Zm6.25 0c-.693 0-1.25.557-1.25 1.25v2.5c0 .693.557 1.25 1.25 1.25s1.25-.557 1.25-1.25v-2.5c0-.693-.557-1.25-1.25-1.25Zm6.25 0c-.693 0-1.25.557-1.25 1.25v2.5c0 .693.557 1.25 1.25 1.25S29 45.443 29 44.75v-2.5c0-.693-.557-1.25-1.25-1.25ZM34 41c-.693 0-1.25.557-1.25 1.25v2.5c0 .693.557 1.25 1.25 1.25s1.25-.557 1.25-1.25v-2.5c0-.693-.557-1.25-1.25-1.25Zm6.25 0c-.693 0-1.25.557-1.25 1.25v2.5c0 .693.557 1.25 1.25 1.25s1.25-.557 1.25-1.25v-2.5c0-.693-.557-1.25-1.25-1.25Zm6.25 0c-.693 0-1.25.557-1.25 1.25v2.5c0 .693.557 1.25 1.25 1.25s1.25-.557 1.25-1.25v-2.5c0-.693-.557-1.25-1.25-1.25ZM59 41c-.693 0-1.25.557-1.25 1.25v2.5c0 .693.557 1.25 1.25 1.25s1.25-.557 1.25-1.25v-2.5c0-.693-.557-1.25-1.25-1.25Zm6.25 0c-.693 0-1.25.557-1.25 1.25v2.5c0 .693.557 1.25 1.25 1.25s1.25-.557 1.25-1.25v-2.5c0-.693-.557-1.25-1.25-1.25Z" />
    ),
  };
  return <svg {...svgIllustrationProps(props)}>{variants[props.style]}</svg>;
}