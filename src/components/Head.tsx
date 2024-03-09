interface HeadProps {
  title: string;
  description: string;
}

export default function Head(props: HeadProps) {
  const { title, description } = props;
  return (
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" type="image/png" href="/icon.png" />
      <script
        type="text/partytown"
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "ba21f0acbb774a4691c0f40c55abd669"}'
      ></script>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
    </head>
  );
}
