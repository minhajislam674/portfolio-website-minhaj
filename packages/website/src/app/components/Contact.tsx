import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import ContactUi from './ui/ContactUi';

interface ContactBlok extends SbBlokData {
    headline: string;
}

interface ContactProps {
    blok: ContactBlok;
}

const Contact = ({ blok }: ContactProps) => {
    return (
    <div {...storyblokEditable(blok)}>
      <ContactUi
        headline={blok.headline}
      />

    </div>
    );
};

export default Contact;
