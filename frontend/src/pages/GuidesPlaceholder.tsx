import React from 'react';
import { UserCheck, Plus } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { GuideCard } from '../components/travel/GuideCard';
import { MOCK_GUIDES } from '../mock/guides';

export const GuidesPlaceholder: React.FC = () => {
  return (
    <PageContainer>
      <PageHeader
        title="Tour Guides Directory"
        subtitle="Manage licensed tour guides, language proficiencies & assignments"
        breadcrumbs={[{ label: 'Guides' }]}
        actions={
          <Button variant="accent" size="sm" leftIcon={<Plus className="w-4 h-4" />}>
            Register Guide
          </Button>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_GUIDES.map(guide => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </PageContainer>
  );
};
