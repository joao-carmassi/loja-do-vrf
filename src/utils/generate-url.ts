import slugify from 'slugify';

const generateUrl = (name: string): string => {
  return slugify(name, { lower: true, strict: true });
};

export default generateUrl;
