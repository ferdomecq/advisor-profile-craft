
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AdvisorCard } from "@/components/marketplace/AdvisorCard";
import { advisorData } from "@/lib/mockAdvisorData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Marketplace() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("");
  const [minRating, setMinRating] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Get unique expertise areas from all advisors
  const expertiseAreas = useMemo(() => {
    const areas = new Set<string>();
    advisorData.forEach((advisor) => {
      advisor.specializations.forEach((spec) => {
        areas.add(spec.name);
      });
    });
    return Array.from(areas);
  }, []);

  // Filter advisors based on search and filters
  const filteredAdvisors = useMemo(() => {
    return advisorData.filter((advisor) => {
      // Search term filtering
      const searchMatch =
        searchTerm === "" ||
        advisor.basicInfo.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        advisor.basicInfo.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        advisor.basicInfo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        advisor.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        advisor.services.some((service) =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

      // Expertise filtering
      const expertiseMatch =
        selectedExpertise === "" ||
        advisor.specializations.some(
          (spec) => spec.name === selectedExpertise
        );

      // Rating filtering
      const ratingMatch =
        minRating === "" ||
        (advisor.overallRating !== undefined &&
          advisor.overallRating >= parseInt(minRating));

      return searchMatch && expertiseMatch && ratingMatch;
    });
  }, [searchTerm, selectedExpertise, minRating]);

  // Pagination
  const paginatedAdvisors = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAdvisors.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAdvisors, currentPage]);

  const totalPages = Math.ceil(filteredAdvisors.length / itemsPerPage);

  const resetFilters = () => {
    setSelectedExpertise("");
    setMinRating("");
  };

  const handleAdvisorClick = (advisorId: string) => {
    navigate(`/customer/${advisorId}`);
  };

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">{t('marketplace.title')}</h1>
      
      {/* Search and filter section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder={t('marketplace.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter size={16} />
            {t('marketplace.filters')}
          </Button>
        </div>

        {showFilters && (
          <Card className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{t('marketplace.filterOptions')}</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="h-auto py-1 px-2 text-sm"
              >
                {t('marketplace.resetFilters')}
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {t('marketplace.expertise')}
                </label>
                <Select
                  value={selectedExpertise}
                  onValueChange={setSelectedExpertise}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('marketplace.selectExpertise')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">
                      {t('marketplace.allExpertise')}
                    </SelectItem>
                    {expertiseAreas.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {t('marketplace.minRating')}
                </label>
                <Select
                  value={minRating}
                  onValueChange={setMinRating}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('marketplace.anyRating')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">
                      {t('marketplace.anyRating')}
                    </SelectItem>
                    <SelectItem value="5">★★★★★ (5+)</SelectItem>
                    <SelectItem value="4">★★★★☆ (4+)</SelectItem>
                    <SelectItem value="3">★★★☆☆ (3+)</SelectItem>
                    <SelectItem value="2">★★☆☆☆ (2+)</SelectItem>
                    <SelectItem value="1">★☆☆☆☆ (1+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          {filteredAdvisors.length} {t('marketplace.advisorsFound')}
        </p>
      </div>

      {/* Advisors grid */}
      {filteredAdvisors.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedAdvisors.map((advisor) => (
              <AdvisorCard
                key={advisor.basicInfo.firstName + advisor.basicInfo.lastName}
                advisor={advisor}
                onClick={() => handleAdvisorClick(advisor.basicInfo.firstName + advisor.basicInfo.lastName)}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      isActive={currentPage === i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">{t('marketplace.noAdvisorsFound')}</p>
          <Button
            variant="outline"
            onClick={resetFilters}
            className="mt-4"
          >
            {t('marketplace.resetFilters')}
          </Button>
        </div>
      )}
    </div>
  );
}
