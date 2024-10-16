import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ResumeContext } from 'contexts/ResumeContext';
import { formatDate } from 'utils/date';
import PrimarySectionWidget from 'widgets/PrimarySectionWidget';
import type { PrimarySectionWidgetProps } from 'widgets/PrimarySectionWidget';

export default function CertificatesSection() {
  const { certificates = [] } = useContext(ResumeContext);

  const data: PrimarySectionWidgetProps = {
    title: 'Certificates',
    items: certificates.map(({ name, url, issuer, date }) => {
      return {
        title: { text: name, href: url },
        subtitles: [issuer],
        textRight: formatDate(date),
        icon: faCertificate,
      };
    }),
  };

  return <PrimarySectionWidget {...data} />;
}
