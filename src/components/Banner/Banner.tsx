import styles from './Banner.module.css';
import type { DefaultProps } from 'custom-types';
import { layoutText } from '@info/layout-text';
import { Wave } from '@src/components';
import { Text, TextContent, TextVariants } from '@patternfly/react-core';
import { useRouter } from 'next/router';

export const Banner: React.FC<DefaultProps> = () => {
  const router = useRouter();

  return (
    <>
      {router.asPath === '/' && !process.env.DEVFILE_BANNER ? (
        <>
          <Wave fill="darker" backgroundColor="dark" />
          <div className={styles.banner}>
            <TextContent>
              <Text className={styles.text} component={TextVariants.h1}>
                {layoutText.bannerTitle}
              </Text>
              <Text className={styles.text} component={TextVariants.h3}>
                {layoutText.bannerBody}
              </Text>
            </TextContent>
          </div>
        </>
      ) : (
        <Wave fill="darker" backgroundColor="light" />
      )}
    </>
  );
};
Banner.displayName = 'Banner';
