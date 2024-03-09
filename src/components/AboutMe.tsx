import type { JSXElement } from "solid-js";

interface AboutMeProps {
  // Use Astro's Image component to optimize local image.
  // https://docs.astro.build/en/guides/images/#images-in-ui-framework-components
  children: JSXElement;
}

export default function AboutMe(props: AboutMeProps) {
  const { children } = props;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>{children}</figure>
      <div class="card-body">
        <p>Software engineer looking for interesting problems</p>
        <ul>
          <li>Go</li>
          <li>Java</li>
          <li>JavaScript/TypeScript</li>
          <li>Python</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}
