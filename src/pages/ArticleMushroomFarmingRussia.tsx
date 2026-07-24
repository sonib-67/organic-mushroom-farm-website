import React, { useEffect } from 'react';
import { Phone, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ArticleMushroomFarmingRussia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[2%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-blue-400/20 dark:bg-blue-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
            </div>

            <SEO 
                title="Обучение выращиванию грибов в России | Полный гид" 
                description="Узнайте как начать грибной бизнес в России. Пройдите наше обучение выращиванию грибов (вешенка, шампиньоны, молочный гриб) от А до Я."
                keywords="обучение выращиванию грибов, грибной бизнес в России, курсы грибоводства, выращивание вешенки, выращивание шампиньонов"
            />
            
            <article className="max-w-4xl mx-auto px-4 prose prose-invert">
                <div className="glass p-8 md:p-12 rounded-[3.5rem] border dark:border-white/5 border-black/5 space-y-8">
                    <div className="text-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-slate-900 leading-tight mb-4">
                            Обучение выращиванию грибов в России | Полный гид
                        </h1>
                    </div>

                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                        Спрос на свежие и экологически чистые продукты в России постоянно растет. Одним из самых рентабельных направлений в сельском хозяйстве сегодня является <strong>грибной бизнес в России</strong>. Независимо от того, живете ли вы в Москве, Санкт-Петербурге или в Сибири, коммерческое выращивание грибов может стать вашим надежным источником дохода.
                    </p>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                        Но с чего начать? Наша современная платформа для <strong>онлайн курсов грибоводства</strong> предлагает пошаговое руководство от подготовки субстрата до сбора первого урожая.
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
                        Почему стоит выбрать наши курсы?
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                        Мы разработали интерактивную обучающую программу, которая идеально подходит как для новичков, так и для опытных фермеров, желающих масштабировать производство. Наша система включает удобные учебные модули и функцию отслеживания успеваемости студентов, чтобы вы всегда видели свой прогресс.
                    </p>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4">
                        В рамках нашего <strong>обучения выращиванию грибов</strong> мы подробно разбираем три самые коммерчески выгодные разновидности:
                    </p>
                    <ul className="list-none space-y-3 dark:text-slate-300 text-slate-700">
                        <li className="flex gap-3"><CheckCircle2 className="text-primary-start shrink-0" size={20} /> <span><strong>Вешенка (Oyster Mushrooms):</strong> Идеальный выбор для старта. Вешенка быстро растет, не требует сложного оборудования и пользуется огромным спросом на российских рынках.</span></li>
                        <li className="flex gap-3"><CheckCircle2 className="text-primary-start shrink-0" size={20} /> <span><strong>Шампиньоны (Button Mushrooms):</strong> Классика грибного рынка. Мы научим вас создавать идеальный микроклимат и компост для получения максимальной урожайности.</span></li>
                        <li className="flex gap-3"><CheckCircle2 className="text-primary-start shrink-0" size={20} /> <span><strong>Молочный гриб (Milky Mushrooms):</strong> Уникальный сорт с долгим сроком хранения и высокой рыночной стоимостью. Отличная возможность выделиться среди конкурентов.</span></li>
                    </ul>

                    <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 border-l-4 border-primary-start pl-4">
                        Что включает программа обучения?
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                        Наше <strong>обучение выращиванию грибов</strong> построено на реальном практическом опыте:
                    </p>

                    <div className="space-y-6">
                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">1. Основы микологии и выбор мицелия</h3>
                            <p className="dark:text-slate-400 text-slate-600">Как выбрать качественный посевной материал для максимального урожая.</p>
                        </div>
                        
                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">2. Подготовка субстрата</h3>
                            <p className="dark:text-slate-400 text-slate-600">Стерилизация, пастеризация и ферментация.</p>
                        </div>

                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">3. Контроль климата</h3>
                            <p className="dark:text-slate-400 text-slate-600">Настройка температуры, влажности и вентиляции для разных стадий роста.</p>
                        </div>

                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">4. Маркетинг и продажи</h3>
                            <p className="dark:text-slate-400 text-slate-600">Как упаковать свой продукт и найти оптовых покупателей в вашем регионе.</p>
                        </div>
                    </div>

                    <div className="bg-linear-to-r from-primary-start/20 to-primary-end/20 p-8 rounded-3xl mt-12 border border-primary-start/20">
                        <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">Начните свой путь в грибоводстве уже сегодня!</h2>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4">
                            Не упускайте возможность занять свою нишу на растущем рынке. Наша платформа онлайн-обучения предоставляет все необходимые знания и инструменты для успешного старта.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 font-bold mb-8">
                            Запишитесь на курс сегодня и сделайте первый шаг к созданию собственной высокодоходной грибной фермы!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link to="/training" className="btn-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all">
                                <BookOpen size={18} /> Записаться на курс
                            </Link>
                            <Link to="/contact" className="btn-outline px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all">
                                Связаться с нами <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                </div>
            </article>
        </div>
    );
};

export default ArticleMushroomFarmingRussia;
