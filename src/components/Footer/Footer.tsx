import styles from './Footer.module.css';
import type { DefaultProps } from 'custom-types';
import { Wave } from '@src/components';
import { layoutText } from '@info/layout-text';
import { Grid, GridItem, Text, TextContent, TextVariants, Brand } from '@patternfly/react-core';

export const Footer: React.FC<DefaultProps> = () => (
  <footer>
    <div className={styles.footer}>
      <Wave fill="darker" backgroundColor="light" flipX={true} flipY={true} />
      <Grid className={styles.footerGrid}>
        <GridItem span={12} sm={6} className={styles.footerGridItem}>
          <div className={styles.title}>
            <Brand
              src={`/images/${layoutText.logo}`}
              alt="Devfile Registry Logo"
              className={styles.logo}
            />
            <TextContent>
              <Text component={TextVariants.h1} className={styles.text}>
                {layoutText.title}
              </Text>
            </TextContent>
          </div>
        </GridItem>
        <GridItem span={12} sm={6} className={styles.footerGridItem}>
          <div className={styles.footerGridLinkItem}>
            <div>
              <TextContent>
                <Text component={TextVariants.h2} className={styles.text}>
                  Links
                </Text>
              </TextContent>
              <ul>
                {layoutText.footerLinks.map((footerLink) => (
                  <li key={footerLink.name}>
                    <a target="_blank" rel="noreferrer" href={footerLink.link}>
                      {footerLink.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GridItem>
      </Grid>
    </div>
  </footer>
);
Footer.displayName = 'Footer';
